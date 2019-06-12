#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const child_process = require("child_process");
let input = fs.readFileSync(0, 'utf-8')

input=replaceLiteral(input, "€€")
input=replaceLiteral(input, "€")

console.log(input)

const pandocFilterPath = path.join(__dirname, "pandoc-filter.js")

let result = child_process.spawnSync("pandoc", ["-t", "latex", "-f", "markdown+lists_without_preceding_blankline+hard_line_breaks", "-s", "--filter", pandocFilterPath], { input: input }).stdout

console.log(String(result))

fs.writeFileSync("input.tex", String(result))

function replaceLiteral(input, literal){
	let position=input.indexOf(literal)
	let first=true
	while(position!=-1){
		input=input.substring(0, position)+"\n\`\`\`"+(first?"asciimath"+String(literal.length):"")+"\n"+input.substring(position+2, input.length)
		first=!first
		position=input.indexOf("€€")
	}
	return input
}
