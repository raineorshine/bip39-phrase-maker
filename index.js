const fs = require('fs')
const sha = require('jssha')

const ASCII_BITS = 7
const BIP39_BITS = 11

function padLeft(nr, n, str){
  return Array(n-String(nr).length+1).join(str||'0')+nr
}

function chunk(list, chunkSize) {
  const output = []
  for(let i=0; i<list.length; i+=chunkSize) {
    const chunk = []
    for(let j=0; j<chunkSize; j++) {
      chunk.push(list[i+j])
    }
    output.push(chunk)
  }
  return output
}

function encode(str) {
  const words = fs.readFileSync('words.txt', 'utf-8').split('\n')
  const binary = str.split('').map(chr => padLeft(chr.charCodeAt(0).toString(2), ASCII_BITS)).join('')
  const indices = chunk(binary.split(''), BIP39_BITS)
    .map(chunk => parseInt(chunk.join(''), 2))
  const selectedWords = indices.map(code => words[code])
  const phrase = selectedWords.join(' ')
  return phrase
}

function decode(phrase) {
}

module.exports = { encode, decode }
