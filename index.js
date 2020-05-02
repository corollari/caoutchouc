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

compile(input, typesetter, inputFile, "pandoc")

function compile(input, typesetter, inputFile, pandocPath){
	input=replaceLiteral(input, "€€", "$$asciimath", "asciimath$$")
	input=replaceLiteral(input, "€", "$asciimath", "asciimath$")
	//input=replaceLiteral(input, "$$$", "```{=latex}", "```")

	let usepackages

	[usepackages, input]=removeUsePackage(input)


	let result = child_process.spawnSync(pandocPath, ["-t", "latex", "-f", "markdown+lists_without_preceding_blankline+hard_line_breaks+raw_tex+raw_attribute", "-s", "--filter", "caou-pandoc-filter"], { input: input }).stdout

	result=String(result)

	result=result.replace(/\$\$asciimath/g, "€€")
	result=result.replace(/\$asciimath/g, "€")
	result=result.replace(/asciimath\$\$/g, "€€")
	result=result.replace(/asciimath\$/g, "€")

 	result=result.replace(/(\\documentclass.*?})/gs, "$1\n"+usepackages)

	let filename = path.basename(inputFile).split(".")
	const extension = filename.pop()

	fs.writeFileSync(filename+".cautex", result)

	child_process.spawnSync(typesetter, process.argv.slice(2,-1).concat([filename+".cautex"]), { stdio: 'inherit' })
}

function replaceLiteral(input, literal, newLiteral1, newLiteral2){
	let position=input.indexOf(literal)
	let first=true
	while(position != -1){
		let newLiteral=""
		if(first){
			newLiteral=newLiteral1
		} else {
			newLiteral=newLiteral2
		}
		input=input.substring(0, position)+newLiteral+input.substring(position+literal.length, input.length)
		first=!first
		position=input.indexOf(literal)
	}
	return input
}

function removeUsePackage(input){
	const usePkg=/\\usepackage{.*}/g
	let usepackages = []
	while ((matches = usePkg.exec(input)) !== null) {
		usepackages.push(matches[0])
	}
	input=input.replace(usePkg, "")
	return [usepackages.join('\n'), input]
}

function printHelp(){
	child_process.exec("groff -man -Tascii "+path.join(__dirname, "man", "caou.1"), (error, stdout, stderr) => console.log(stdout))
}
