import Keyboard from './keyboard.js';

Keyboard.init(); // * create html
Keyboard.languageHidden(); // *hide not use language
Keyboard.elementsHidden(); // *hide not use elements
Keyboard.changeLanguage();
// keyDown keyboard
document.onkeydown = (event) => {
  if (event.keyCode === 20) {
    document.querySelector('.CapsLock').classList.toggle('active');
    document
      .querySelectorAll('.caps')
      .forEach((e) => e.classList.toggle('hidden'));
    document
      .querySelectorAll('.caseDown')
      .forEach((e) => e.classList.toggle('hidden'));
  } else {
    Keyboard.buttonActivate(event);
  }

  // press shift
  if (event.keyCode === 16) {
    if (document.querySelector('.CapsLock').classList.contains('active')) {
      // CapsLock press
      document.querySelectorAll('.caps').forEach((e) => e.classList.add('hidden'));
      document.querySelectorAll('.shiftCaps').forEach((e) => e.classList.remove('hidden'));
    } else {
      document.querySelectorAll('.caseUp').forEach((e) => e.classList.remove('hidden'));
      document.querySelectorAll('.caseDown').forEach((e) => e.classList.add('hidden'));
    }
  }
  return false;
};
// keyUp keyboard
document.onkeyup = (event) => {
  const capsLock = document.querySelector('.CapsLock');
  if (event.keyCode === 16) {
    if (capsLock.classList.contains('active')) {
      // CapsLock pressed
      Keyboard.buttonDeactivate();
      capsLock.classList.add('active');
      document.querySelectorAll('.caps').forEach((e) => e.classList.remove('hidden'));
      document.querySelectorAll('.shiftCaps').forEach((e) => e.classList.add('hidden'));
    } else {
      Keyboard.buttonDeactivate();
      document.querySelectorAll('.caseUp').forEach((e) => e.classList.add('hidden'));
      document.querySelectorAll('.caseDown').forEach((e) => e.classList.remove('hidden'));
    }
  } else if (capsLock.classList.contains('active')) {
    // CapsLock pressed
    Keyboard.buttonDeactivate();
    capsLock.classList.add('active');
  } else {
    Keyboard.buttonDeactivate();
  }
  return false;
};

// active from mouse
document.querySelectorAll('.keyboard-key').forEach((e) => e.addEventListener('mousedown', () => {
  Keyboard.mouseInputText(e);
  const code = e.classList[2];
  if (code.includes('CapsLock')) {
    document.querySelector(`.${code}`).classList.toggle('active');
    document.querySelectorAll('.caps').forEach((el) => el.classList.toggle('hidden'));
    document.querySelectorAll('.caseDown').forEach((el) => el.classList.toggle('hidden'));
  } else {
    document.querySelector(`.${code}`).classList.add('active');
  }

  const capsLock = document.querySelector('.CapsLock');
  if (code.includes('Shift')) {
    if (capsLock.classList.contains('active')) {
      document.querySelectorAll('.caps').forEach((el) => el.classList.add('hidden'));
      document.querySelectorAll('.shiftCaps').forEach((el) => el.classList.remove('hidden'));
    } else {
      document.querySelectorAll('.caseUp').forEach((el) => el.classList.remove('hidden'));
      document.querySelectorAll('.caseDown').forEach((el) => el.classList.add('hidden'));
    }
  }
}));
// deactivate from mouse
document.querySelectorAll('.keyboard-key').forEach((e) => e.addEventListener('mouseup', () => {
  const code = e.classList[2];
  if (code.includes('CapsLock')) {
    // const capsLock = document.querySelector(`.${code}`);
  } else {
    document.querySelector(`.${code}`).classList.remove('active');
  }

  const capsLock = document.querySelector('.CapsLock');
  if (code.includes('Shift')) {
    if (capsLock.classList.contains('active')) {
      document.querySelectorAll('.caps').forEach((el) => el.classList.remove('hidden'));
      document.querySelectorAll('.shiftCaps').forEach((el) => el.classList.add('hidden'));
    } else {
      document.querySelectorAll('.caseUp').forEach((el) => el.classList.add('hidden'));
      document.querySelectorAll('.caseDown').forEach((el) => el.classList.remove('hidden'));
    }
  }
}));
