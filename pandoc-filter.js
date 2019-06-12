#!/usr/bin/env node

const pandoc = require('pandoc-filter-promisified')
const AsciiMath2Latex = require('./lib/ASCIIMathTeXImg.js')
const { Formula } = pandoc

const HEADER = "asciimath"

pandoc.stdio(action)

async function action(elt, pandocOutputFormat, meta) {
  if (elt.t === `Math`) {
    // console.warn(JSON.stringify(elt, null, 4));
    const [mathType, content] = elt.c

    if(!content.startsWith(HEADER)) return

    let newContent = AsciiMath2Latex(content.replace(/asciimath/g, ""))

    return Formula(mathType, newContent)
  }
}
