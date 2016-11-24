const chai = require('chai')
const phraseMaker = require('../')
const should = chai.should()

describe('bip39-phrase-maker', () => {
  it('should encode an ascii string into a bip39 phrase.', () => {
    phraseMaker.encode('test').should.equal('trumpet rude alley')
    phraseMaker.encode('1-27baa6deaf12d3116cae5d6a22c5d810c513ea8bde429b0730a0e2dc029813e58dcd311a3e5479c16e4cf526aa18df51cd4d05aa4977d1292a37f764c317b98e3e4db4b54b1b64b08448ce52c9db89b88c7d66820ac6d63e85569c70041b5d59a958de0efa8e75e10d4e5ed73e39454a50102de897424b0c2f40251dc24aef').should.equal('glance prosper tenant rail arena gospel found smoke coach muscle suffer merge glow bronze high misery machine offer brave tongue mail ghost hood sheriff very argue glare erosion hand example maze brick only gesture arrow grain occur screen original seek record find immense ocean muscle suffer mix record find hand unveil mirror fork clip glow grit gospel such machine fragile chapter cube broccoli silver october script ill area defense ivory silver clutch tortoise radar opinion toy item hat holiday shield van slide grace device hat obtain spread one plate crack chat hat equal ticket boss shiver tornado film shoulder decrease mean brother bean decide dad silver snow thunder observe athlete replace egg guide puppy stick forest soda resist alcohol hand decade strong boy sock ride finish sister promote now radar shock resist frequent glare boil spring foot comic danger device group code stick cost prison cousin alien sister puppy toss surface nation give arrest grain snack screen one mixture gloom charge seminar fresh')
  })

  it('should decode a bip39 phrase an ascii string.', () => {
    phraseMaker.decode('trumpet rude alley').should.equal('test')
  })
})
