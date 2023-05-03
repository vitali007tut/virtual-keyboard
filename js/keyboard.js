/*
! in /js run
npx eslint app.js --fix
npx eslint keyboard.js--fix
*/

const elementsRus = [
  [
    ['Backquote', 'ё', 'Ё', 'Ё', 'ё'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '"', '2', '"'],
    ['Digit3', '3', '№', '3', '№'],
    ['Digit4', '4', ';', '4', ';'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', ':'],
    ['Digit7', '7', '?', '7', '?'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'Й', 'й'],
    ['KeyW', 'ц', 'Ц', 'Ц', 'ц'],
    ['KeyE', 'у', 'У', 'У', 'у'],
    ['KeyR', 'к', 'К', 'К', 'к'],
    ['KeyT', 'е', 'Е', 'Е', 'е'],
    ['KeyY', 'н', 'Н', 'Н', 'н'],
    ['KeyU', 'г', 'Г', 'Г', 'г'],
    ['KeyI', 'ш', 'Ш', 'Ш', 'ш'],
    ['KeyO', 'щ', 'Щ', 'Щ', 'щ'],
    ['KeyP', 'з', 'З', 'З', 'з'],
    ['BracketLeft', 'х', 'Х', 'Х', 'х'],
    ['BracketRight', 'ъ', 'Ъ', 'Ъ', 'ъ'],
    ['Backslash', '\\', '/', '\\', '/'],
    ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'Ф', 'ф'],
    ['KeyS', 'ы', 'Ы', 'Ы', 'ы'],
    ['KeyD', 'в', 'В', 'В', 'в'],
    ['KeyF', 'а', 'А', 'А', 'а'],
    ['KeyG', 'п', 'П', 'П', 'п'],
    ['KeyH', 'р', 'Р', 'Р', 'р'],
    ['KeyJ', 'о', 'О', 'О', 'о'],
    ['KeyK', 'л', 'Л', 'Л', 'л'],
    ['KeyL', 'д', 'Д', 'Д', 'д'],
    ['Semicolon', 'ж', 'Ж', 'Ж', 'ж'],
    ['Quote', 'э', 'Э', 'Э', 'э'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'Я', 'я'],
    ['KeyX', 'ч', 'Ч', 'Ч', 'ч'],
    ['KeyC', 'с', 'С', 'С', 'с'],
    ['KeyV', 'м', 'М', 'М', 'м'],
    ['KeyB', 'и', 'И', 'И', 'и'],
    ['KeyN', 'т', 'Т', 'Т', 'т'],
    ['KeyM', 'ь', 'Ь', 'Ь', 'ь'],
    ['Comma', 'б', 'Б', 'Б', 'б'],
    ['Period', 'ю', 'Ю', 'Ю', 'ю'],
    ['Slash', '.', ',', '.', ','],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];

const elementsEng = [
  [
    ['Backquote', '`', '~', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '@', '2', '@'],
    ['Digit3', '3', '#', '3', '#'],
    ['Digit4', '4', '$', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', '^', '6', '^'],
    ['Digit7', '7', '&', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'q', 'Q', 'Q', 'q'],
    ['KeyW', 'w', 'W', 'W', 'w'],
    ['KeyE', 'e', 'E', 'E', 'e'],
    ['KeyR', 'r', 'R', 'R', 'r'],
    ['KeyT', 't', 'T', 'T', 't'],
    ['KeyY', 'y', 'Y', 'Y', 'y'],
    ['KeyU', 'u', 'U', 'U', 'u'],
    ['KeyI', 'i', 'I', 'I', 'i'],
    ['KeyO', 'o', 'O', 'O', 'o'],
    ['KeyP', 'p', 'P', 'P', 'p'],
    ['BracketLeft', '[', '{', '[', '{'],
    ['BracketRight', ']', '}', ']', '}'],
    ['Backslash', '\\', '|', '\\', '|'],
    ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'a', 'A', 'A', 'a'],
    ['KeyS', 's', 'S', 'S', 's'],
    ['KeyD', 'd', 'D', 'D', 'd'],
    ['KeyF', 'f', 'F', 'F', 'f'],
    ['KeyG', 'g', 'G', 'G', 'g'],
    ['KeyH', 'h', 'H', 'H', 'h'],
    ['KeyJ', 'j', 'J', 'J', 'j'],
    ['KeyK', 'k', 'K', 'K', 'k'],
    ['KeyL', 'l', 'L', 'L', 'l'],
    ['Semicolon', ';', ':', ';', ':'],
    ['Quote', "'", '"', "'", '"'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'z', 'Z', 'Z', 'z'],
    ['KeyX', 'x', 'X', 'X', 'x'],
    ['KeyC', 'c', 'C', 'C', 'c'],
    ['KeyV', 'v', 'V', 'V', 'v'],
    ['KeyB', 'b', 'B', 'B', 'b'],
    ['KeyN', 'n', 'N', 'N', 'n'],
    ['KeyM', 'm', 'M', 'M', 'm'],
    ['Comma', ',', '<', ',', '<'],
    ['Period', '.', '>', '.', '>'],
    ['Slash', '/', '?', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];

const notWritingElemements = [
  'Backspace', // *
  'Tab', // *
  'Delete', // *
  'CapsLock',
  'Space', // *
  'Enter', // *
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'AltRight',
  'ControlRight',
];

const Keyboard = {
  lang: localStorage.getItem('lang'),

  init() {
    if (!localStorage.getItem('lang')) {
      this.lang = 'rus';
      localStorage.setItem('lang', 'rus');
    }
    // * add style in html
    const style = window.document.createElement('link');
    style.href = './css/style.css';
    style.rel = 'stylesheet';
    window.document.getElementsByTagName('head')[0].appendChild(style);

    // * add container
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    // * add title
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = 'Виртуальная клавиатура';
    container.appendChild(title);

    // * add textArea
    const textArea = document.createElement('textarea');
    textArea.classList.add('textarea');
    container.appendChild(textArea);

    // * add keyboard
    const bodyKeyboard = document.createElement('div');
    bodyKeyboard.classList.add('keyboard', 'keyboard-body');
    bodyKeyboard.setAttribute('id', 'keyboard');
    container.appendChild(bodyKeyboard);

    // add 5 rows
    for (let i = 0; i < 5; i += 1) {
      const rowKeyboard = document.createElement('div');
      rowKeyboard.classList.add('keyboard-row', 'row');
      bodyKeyboard.appendChild(rowKeyboard);

      for (let j = 0; j < elementsRus[i].length; j += 1) {
        const btn = document.createElement('div');
        btn.classList.add('keyboard-key', 'key', elementsRus[i][j][0]);

        // create cards button
        // * rus
        const downValue = elementsRus[i][j][1];
        const upValue = elementsRus[i][j][2];
        const capsValueRus = elementsRus[i][j][3];
        const shiftCapsValueRus = elementsRus[i][j][4];
        const cardRus = document.createElement('span');
        cardRus.classList.add('rus');
        const caseDown = document.createElement('span');
        caseDown.classList.add('caseDown');
        caseDown.innerHTML = downValue;
        const caseUp = document.createElement('span');
        caseUp.classList.add('caseUp');
        caseUp.innerHTML = upValue;
        const caps = document.createElement('span');
        caps.classList.add('caps');
        caps.innerHTML = capsValueRus;
        const shiftCaps = document.createElement('span');
        shiftCaps.classList.add('shiftCaps');
        shiftCaps.innerHTML = shiftCapsValueRus;

        // add rus in cardRus
        cardRus.appendChild(caseDown);
        cardRus.appendChild(caseUp);
        cardRus.appendChild(caps);
        cardRus.appendChild(shiftCaps);
        // add rus card to btn
        btn.appendChild(cardRus);

        // * eng
        const downValueEng = elementsEng[i][j][1];
        const upValueEng = elementsEng[i][j][2];
        const capsValueEng = elementsEng[i][j][3];
        const shiftCapsValueEng = elementsEng[i][j][4];
        const cardEng = document.createElement('span');
        cardEng.classList.add('eng');
        const caseDownEng = document.createElement('span');
        caseDownEng.classList.add('caseDown');
        caseDownEng.innerHTML = downValueEng;
        const caseUpEng = document.createElement('span');
        caseUpEng.classList.add('caseUp');
        caseUpEng.innerHTML = upValueEng;
        const capsEng = document.createElement('span');
        capsEng.classList.add('caps');
        capsEng.innerHTML = capsValueEng;
        const shiftCapsEng = document.createElement('span');
        shiftCapsEng.classList.add('shiftCaps');
        shiftCapsEng.innerHTML = shiftCapsValueEng;
        // add english cards
        cardEng.appendChild(caseDownEng);
        cardEng.appendChild(caseUpEng);
        cardEng.appendChild(capsEng);
        cardEng.appendChild(shiftCapsEng);

        // add engCard in btn
        btn.appendChild(cardEng);

        // add btn into row
        rowKeyboard.appendChild(btn);
      }
    }

    // * add footer
    const os = document.createElement('p');
    os.classList.add('description');
    os.innerHTML = 'Клавиатура создана в операционной системе Windows';
    container.appendChild(os);

    const language = document.createElement('p');
    language.classList.add('language');
    language.innerHTML = "Для переключения языка комбинация: левыe <span style='color: lime'>ctrl + alt</span>";
    container.appendChild(language);
  },

  languageHidden() {
    const language = localStorage.getItem('lang');

    if (language === 'rus') {
      document
        .querySelectorAll('.rus')
        .forEach((e) => e.classList.remove('hidden'));
      document
        .querySelectorAll('.eng')
        .forEach((e) => e.classList.add('hidden'));
      // localStorage.setItem("lang", "rus");
    } else {
      document
        .querySelectorAll('.eng')
        .forEach((e) => e.classList.remove('hidden'));
      document
        .querySelectorAll('.rus')
        .forEach((e) => e.classList.add('hidden'));
      // localStorage.setItem("lang", "eng");
    }
  },

  elementsHidden() {
    document
      .querySelectorAll('.caseUp')
      .forEach((e) => e.classList.add('hidden'));
    document
      .querySelectorAll('.caps')
      .forEach((e) => e.classList.add('hidden'));
    document
      .querySelectorAll('.shiftCaps')
      .forEach((e) => e.classList.add('hidden'));
  },

  changeLanguage() {
    const codes = ['ControlLeft', 'AltLeft'];
    const pressed = new Set();

    document.addEventListener('keydown', function keyDown(event) {
      pressed.add(event.code);

      if (!pressed.has(codes[0]) || !pressed.has(codes[1])) {
        return;
      }
      pressed.clear();

      // function for changing language
      this.lang = localStorage.getItem('lang');
      if (this.lang === 'rus') {
        localStorage.setItem('lang', 'eng');
        Keyboard.languageHidden();
      } else {
        localStorage.setItem('lang', 'rus');
        Keyboard.languageHidden();
      }
    });

    document.addEventListener('keyup', (event) => {
      pressed.delete(event.code);
    });
  },

  buttonActivate(e) {
    let eCode = e.code;
    if (eCode === 'NumpadEnter') eCode = 'Enter';
    const activeElement = document.querySelector(`.${eCode}`);
    const textArea = document.querySelector('.textarea');
    activeElement.classList.add('active');
    const activeLang = localStorage.getItem('lang');
    const child = activeElement.querySelector(`.${activeLang}`);
    let cursor = textArea.selectionStart;
    const left = textArea.value.slice(0, cursor);
    const right = textArea.value.slice(cursor);

    if (!notWritingElemements.includes(eCode)) {
      textArea.value = left + child.innerText + right;
      cursor += 1;
      textArea.setSelectionRange(cursor, cursor);
    } else {
      switch (eCode) {
        case 'Enter':
          textArea.value = `${left}\n${right}`;
          cursor += 1;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Space':
          textArea.value = `${left} ${right}`;
          cursor += 1;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Tab':
          textArea.value = `${left}  ${right}`;
          cursor += 2;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Backspace':
          textArea.value = `${left.slice(0, -1)}${right}`;
          cursor -= 1;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Delete':
          textArea.value = `${left}${right.slice(1)}`;
          textArea.setSelectionRange(cursor, cursor);
          break;
        default:
          break;
      }
    }
  },

  buttonDeactivate() {
    document.querySelectorAll('.keyboard-key').forEach((e) => {
      e.classList.remove('active');
    });
  },

  mouseInputText(e) {
    const textArea = document.querySelector('.textarea');
    const activeLang = localStorage.getItem('lang');
    const child = e.querySelector(`.${activeLang}`);
    let cursor = textArea.selectionStart;
    const left = textArea.value.slice(0, cursor);
    const right = textArea.value.slice(cursor);
    const eCode = e.classList.value.split(' ')[2];
    if (!notWritingElemements.includes(eCode)) {
      textArea.value = left + child.innerText + right;
      cursor += 1;
      textArea.setSelectionRange(cursor, cursor);
    } else {
      switch (eCode) {
        case 'Enter':
          textArea.value = `${left}\n${right}`;
          cursor += 1;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Space':
          textArea.value = `${left} ${right}`;
          cursor += 1;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Tab':
          textArea.value = `${left}  ${right}`;
          cursor += 2;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Backspace':
          textArea.value = `${left.slice(0, -1)}${right}`;
          cursor -= 1;
          textArea.setSelectionRange(cursor, cursor);
          break;
        case 'Delete':
          textArea.value = `${left}${right.slice(1)}`;
          textArea.setSelectionRange(cursor, cursor);
          break;
        default:
          break;
      }
    }
  },
};

export default Keyboard;
