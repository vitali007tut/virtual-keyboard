import { /* createLiter, */ Keyboard } from './keyboard.js'

Keyboard.init()

// test

// console.log(Keyboard.lang)
const row = []
document.onkeydown = function (event) {
  // row.push(event.code)
  // console.log(event)
  console.log(event.key)
	console.log(String.fromCharCode(event.keyCode))
}
// const component = createLiter('R') // example