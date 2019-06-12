#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const child_process = require("child_process");
const process = require('process');

const inputFile = process.argv[process.argv.length - 1].replace(/tex$/, "md") //For TeXstudio
//const inputFile = process.argv[process.argv.length - 1]

let input = fs.readFileSync(inputFile, 'utf-8')

input=replaceLiteral(input, "€€")
input=replaceLiteral(input, "€")

const pandocFilterPath = path.join(__dirname, "pandoc-filter.js")

let result = child_process.spawnSync("pandoc", ["-t", "latex", "-f", "markdown+lists_without_preceding_blankline+hard_line_breaks", "-s", "--filter", pandocFilterPath], { input: input }).stdout

let filename = path.basename(inputFile).split(".")
const extension = filename.pop()

fs.writeFileSync(filename+".cautex", String(result))

child_process.spawnSync(path.basename(process.argv[2]), process.argv.slice(3,-1).concat([filename+".cautex"]))

function replaceLiteral(input, literal){
	let position=input.indexOf(literal)
	let first=true
	while(position != -1){
		input=input.substring(0, position)+"\n\`\`\`"+(first?"asciimath"+String(literal.length):"")+"\n"+input.substring(position+2, input.length)
		first=!first
		position=input.indexOf(literal)
	}
	return input
}
