import { Keyboard } from "./keyboard.js";

Keyboard.init();
Keyboard.languageHidden();
Keyboard.changeLanguage();



// test
const row = [];
document.onkeydown = function (event) {
  // row.push(event.code)
  // console.log(event)
  // console.log(event.code)
};
