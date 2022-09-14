#!/usr/bin/node
class Square extends require('./5-square') {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let myVar = '';
      for (let j = 0; j < this.width; j++) {
        myVar = myVar + c;
      }
      console.log(myVar);
    }
  }
}
module.exports = Square;
