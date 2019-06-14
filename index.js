#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const child_process = require("child_process");
const process = require('process');

if(process.argv.length<=2 || process.argv.includes("--help") || process.argv.includes("-h")){
	printHelp()
	return
}

const inputFile = process.argv[process.argv.length - 1] //.replace(/tex$/, "md") //For TeXstudio

let typesetter = "pdflatex"

if(process.argv.includes("--tex")){
	let pos=process.argv.indexOf("--tex")
	typesetter=process.argv[pos+1]
	process.argv.splice(pos, 2)
}

let input=""
try{
	input = fs.readFileSync(inputFile, 'utf-8')
} catch(e) {
	console.warn("Error: file "+inputFile+" does not exist")
	return
}

input=replaceLiteral(input, "€€")
input=replaceLiteral(input, "€")

const pandocFilterPath = path.join(__dirname, "pandoc-filter.js")

let result = child_process.spawnSync("pandoc", ["-t", "latex", "-f", "markdown+lists_without_preceding_blankline+hard_line_breaks", "-s", "--filter", pandocFilterPath], { input: input }).stdout

result=String(result)

result=result.replace(/\$\$asciimath/g, "€€")
result=result.replace(/\$asciimath/g, "€")
result=result.replace(/asciimath\$\$/g, "€€")
result=result.replace(/asciimath\$/g, "€")


let filename = path.basename(inputFile).split(".")
const extension = filename.pop()

fs.writeFileSync(filename+".cautex", result)

child_process.spawnSync(typesetter, process.argv.slice(2,-1).concat([filename+".cautex"]), { stdio: 'inherit' })

function replaceLiteral(input, literal){
	let position=input.indexOf(literal)
	let first=true
	const delimiter=literal.length==1?"$":"$$"
	while(position != -1){
		let newLiteral=""
		if(first){
			newLiteral=delimiter+"asciimath"
		} else {
			newLiteral="asciimath"+delimiter
		}
		input=input.substring(0, position)+newLiteral+input.substring(position+literal.length, input.length)
		first=!first
		position=input.indexOf(literal)
	}
	return input
}

function printHelp(){
	child_process.exec("groff -man -Tascii "+path.join(__dirname, "man", "caou.1"), (error, stdout, stderr) => console.log(stdout))
}