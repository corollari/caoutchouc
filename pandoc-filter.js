#!/usr/bin/env node

const pandoc = require('pandoc-filter-promisified')
const AsciiMath2Latex = require('./lib/ASCIIMathTeXImg.js')
const { CodeBlock, RawBlock } = pandoc

const HEADER = "asciimath"

pandoc.stdio(action)

async function action(elt, pandocOutputFormat, meta) {
  if (elt.t === `CodeBlock`) {
    // console.warn(JSON.stringify(elt, null, 4));
    const [headers, content] = elt.c

    const literalLength = getAsciiMathLiteral(headers)
    if(literalLength === 0) return

    const literal = literalLength==2?"$$":"$"

    let newContent = literal+AsciiMath2Latex(content)+literal

    return RawBlock('latex', newContent)
  }
}

function getAsciiMathLiteral(headers) {
  const [_, classes, keyValuePairs] = headers

  if(classes.includes(HEADER+"1")) return 1
  if(classes.includes(HEADER+"2")) return 2
  return 0
}
