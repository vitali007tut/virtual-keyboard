import { Keyboard } from './keyboard.js';

Keyboard.init(); // create html
Keyboard.languageHidden(); // hide not use language
Keyboard.changeLanguage();
// active from keyDown keyboard
document.onkeydown = (event) => Keyboard.buttonActivate(event);

// deactivate from keyUp keyboard
document.onkeyup = (event) => Keyboard.buttonDeactivate(event);
// active from mouse
document.querySelectorAll('.keyboard-key').forEach((e) => e.addEventListener('mousedown', () => {
  const code = e.classList[2];
  document.querySelector(`.${code}`).classList.add('active');
}));
// deactivate from mouse
document.querySelectorAll('.keyboard-key').forEach((e) => e.addEventListener('mouseup', () => {
  const code = e.classList[2];
  document.querySelector(`.${code}`).classList.remove('active');
}));

// test
// const row = [];
// document.onkeydown = function (event) {
//   row.push(event.code)
//   console.log(event)
//   console.log(event.code)
// };
