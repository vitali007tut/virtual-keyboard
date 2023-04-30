const elementsRus = [
  [
    ["Backquote", "ё", "Ё"],
    ["Digit1", "1", "!"],
    ["Digit2", "2", '"'],
    ["Digit3", "3", "№"],
    ["Digit4", "4", ";"],
    ["Digit5", "5", "%"],
    ["Digit6", "6", ":"],
    ["Digit7", "7", "?"],
    ["Digit8", "8", "*"],
    ["Digit9", "9", "("],
    ["Digit0", "0", ")"],
    ["Minus", "-", "_"],
    ["Equal", "=", "+"],
    ["Backspace", "Backspace", "Backspace"],
  ],
  [
    ["Tab", "Tab", "Tab"],
    ["KeyQ", "й", "Й"],
    ["KeyW", "ц", "Ц"],
    ["KeyE", "у", "У"],
    ["KeyR", "к", "К"],
    ["KeyT", "е", "Е"],
    ["KeyY", "н", "Н"],
    ["KeyU", "г", "Г"],
    ["KeyI", "ш", "Ш"],
    ["KeyO", "щ", "Щ"],
    ["KeyP", "з", "З"],
    ["BracketLeft", "х", "Х"],
    ["BracketRight", "ъ", "Ъ"],
    ["Backslash", "\\", "/"],
    ["Delete", "Del", "Del"],
  ],
  [
    ["CapsLock", "CapsLock", "CapsLock"],
    ["KeyA", "ф", "Ф"],
    ["KeyS", "ы", "Ы"],
    ["KeyD", "в", "В"],
    ["KeyF", "а", "А"],
    ["KeyG", "п", "П"],
    ["KeyH", "р", "Р"],
    ["KeyJ", "о", "О"],
    ["KeyK", "л", "Л"],
    ["KeyL", "д", "Д"],
    ["Semicolon", "ж", "Ж"],
    ["Quote", "э", "Э"],
    ["Enter", "Enter", "Enter"],
  ],
  [
    ["ShiftLeft", "Shift", "Shift"],
    ["KeyZ", "я", "Я"],
    ["KeyX", "ч", "Ч"],
    ["KeyC", "с", "С"],
    ["KeyV", "м", "М"],
    ["KeyB", "и", "И"],
    ["KeyN", "т", "Т"],
    ["KeyM", "ь", "Ь"],
    ["Comma", "б", "Б"],
    ["Period", "ю", "Ю"],
    ["Slash", ".", ","],
    ["ArrowUp", "▲", "▲"],
    ["ShiftRight", "Shift", "Shift"],
  ],
  [
    ["ControlLeft", "Ctrl", "Ctrl"],
    ["MetaLeft", "Win", "Win"],
    ["AltLeft", "Alt", "Alt"],
    ["Space", " ", " "],
    ["AltRight", "Alt", "Alt"],
    ["ArrowLeft", "◄", "◄"],
    ["ArrowDown", "▼", "▼"],
    ["ArrowRight", "►", "►"],
    ["ControlRight", "Ctrl", "Ctrl"],
  ],
];

const elementsEng = [
  [
    ["Backquote", "`", "~"],
    ["Digit1", "1", "!"],
    ["Digit2", "2", "@"],
    ["Digit3", "3", "#"],
    ["Digit4", "4", "$"],
    ["Digit5", "5", "%"],
    ["Digit6", "6", "^"],
    ["Digit7", "7", "&"],
    ["Digit8", "8", "*"],
    ["Digit9", "9", "("],
    ["Digit0", "0", ")"],
    ["Minus", "-", "_"],
    ["Equal", "=", "+"],
    ["Backspace", "Backspace", "Backspace"],
  ],
  [
    ["Tab", "Tab", "Tab"],
    ["KeyQ", "q", "Q"],
    ["KeyW", "w", "W"],
    ["KeyE", "e", "E"],
    ["KeyR", "r", "R"],
    ["KeyT", "t", "T"],
    ["KeyY", "y", "Y"],
    ["KeyU", "u", "U"],
    ["KeyI", "i", "I"],
    ["KeyO", "o", "O"],
    ["KeyP", "p", "P"],
    ["BracketLeft", "[", "{"],
    ["BracketRight", "]", "}"],
    ["Backslash", "\\", "|"],
    ["Delete", "Del", "Del"],
  ],
  [
    ["CapsLock", "CapsLock", "CapsLock"],
    ["KeyA", "a", "A"],
    ["KeyS", "s", "S"],
    ["KeyD", "d", "D"],
    ["KeyF", "f", "F"],
    ["KeyG", "g", "G"],
    ["KeyH", "h", "H"],
    ["KeyJ", "j", "J"],
    ["KeyK", "k", "K"],
    ["KeyL", "l", "L"],
    ["Semicolon", ";", ":"],
    ["Quote", "'", `"`],
    ["Enter", "Enter", "Enter"],
  ],
  [
    ["ShiftLeft", "Shift", "Shift"],
    ["KeyZ", "z", "Z"],
    ["KeyX", "x", "X"],
    ["KeyC", "c", "C"],
    ["KeyV", "v", "V"],
    ["KeyB", "b", "B"],
    ["KeyN", "n", "N"],
    ["KeyM", "m", "M"],
    ["Comma", ",", "<"],
    ["Period", ".", ">"],
    ["Slash", "/", "?"],
    ["ArrowUp", "▲", "▲"],
    ["ShiftRight", "Shift", "Shift"],
  ],
  [
    ["ControlLeft", "Ctrl", "Ctrl"],
    ["MetaLeft", "Win", "Win"],
    ["AltLeft", "Alt", "Alt"],
    ["Space", " ", " "],
    ["AltRight", "Alt", "Alt"],
    ["ArrowLeft", "◄", "◄"],
    ["ArrowDown", "▼", "▼"],
    ["ArrowRight", "►", "►"],
    ["ControlRight", "Ctrl", "Ctrl"],
  ],
];

const notWritingElemements = [
  "Backspace",
  "Tab",
  "Delete",
  "CapsLock",
  "Enter",
  "ShiftLeft",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "AltRight",
  "ControlRight",
];

const Keyboard = {
  lang: localStorage.getItem("lang"),

  init() {
    // * add style in html
    const style = window.document.createElement("link");
    style.href = "./css/style.css";
    style.rel = "stylesheet";
    window.document.getElementsByTagName("head")[0].appendChild(style);

    const body = document.querySelector("body");

    // * add container
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    // * add title
    const title = document.createElement("p");
    title.classList.add("title");
    title.innerHTML = "Виртуальная клавиатура";
    container.appendChild(title);

    // * add textArea
    const textArea = document.createElement("textarea");
    textArea.classList.add("textarea");
    container.appendChild(textArea);

    // * add keyboard
    const bodyKeyboard = document.createElement("div");
    bodyKeyboard.classList.add("keyboard", "keyboard-body");
    bodyKeyboard.setAttribute("id", "keyboard");
    container.appendChild(bodyKeyboard);

    // add 5 rows
    for (let i = 0; i < 5; i++) {
      const rowKeyboard = document.createElement("div");
      rowKeyboard.classList.add("keyboard-row", "row");
      bodyKeyboard.appendChild(rowKeyboard);

      for (let j = 0; j < elementsRus[i].length; j++) {
        const btn = document.createElement("div");
        btn.classList.add("keyboard-key", "key", elementsRus[i][j][0]);

        //create cards button
        // * rus
        const cardRus = document.createElement("span");
        cardRus.classList.add("rus");
        const caseDown = document.createElement("span");
        caseDown.classList.add("caseDown");
        caseDown.innerHTML = elementsRus[i][j][1];
        const caseUp = document.createElement("span");
        caseUp.classList.add("caseUp");
        caseUp.innerHTML = elementsRus[i][j][2];
        const caps = document.createElement("span");
        caps.classList.add("caps");
        caps.innerHTML = elementsRus[i][j][2];
        const shiftCaps = document.createElement("span");
        shiftCaps.classList.add("shiftCaps");
        shiftCaps.innerHTML = elementsRus[i][j][1];

        // add rus in cardRus
        cardRus.appendChild(caseDown);
        // todo delete comments when implements functions
        // cardRus.appendChild(caseUp);
        // cardRus.appendChild(caps);
        // cardRus.appendChild(shiftCaps);
        // add rus card to btn
        btn.appendChild(cardRus);

        // * eng
        const cardEng = document.createElement("span");
        cardEng.classList.add("eng");
        const caseDownEng = document.createElement("span");
        caseDownEng.classList.add("caseDown");
        caseDownEng.innerHTML = elementsEng[i][j][1];
        const caseUpEng = document.createElement("span");
        caseUpEng.classList.add("caseUp");
        caseUpEng.innerHTML = elementsEng[i][j][2];
        const capsEng = document.createElement("span");
        capsEng.classList.add("caps");
        capsEng.innerHTML = elementsEng[i][j][2];
        const shiftCapsEng = document.createElement("span");
        shiftCapsEng.classList.add("shiftCaps");
        shiftCapsEng.innerHTML = elementsEng[i][j][1];
        // add english cards
        cardEng.appendChild(caseDownEng);
        // todo delete comments when implements functions
        // cardEng.appendChild(caseUpEng)
        // cardEng.appendChild(capsEng)
        // cardEng.appendChild(shiftCapsEng)

        // add engCard in btn
        btn.appendChild(cardEng);

        // add btn into row
        rowKeyboard.appendChild(btn);
      }
    }

    // * add footer
    const os = document.createElement("p");
    os.classList.add("description");
    os.innerHTML = "Клавиатура создана в операционной системе Windows";
    container.appendChild(os);

    const language = document.createElement("p");
    language.classList.add("language");
    language.innerHTML =
      "Для переключения языка комбинация: левыe <span style='color: lime'>ctrl + alt</span>";
    container.appendChild(language);
  },

  languageHidden() {
    const language = localStorage.getItem("lang") || "rus";

    if (language === "rus") {
      document
        .querySelectorAll(".rus")
        .forEach((e) => e.classList.remove("hidden"));
      document
        .querySelectorAll(".eng")
        .forEach((e) => e.classList.add("hidden"));
      // localStorage.setItem("lang", "rus");
    } else {
      document
        .querySelectorAll(".eng")
        .forEach((e) => e.classList.remove("hidden"));
      document
        .querySelectorAll(".rus")
        .forEach((e) => e.classList.add("hidden"));
      // localStorage.setItem("lang", "eng");
    }
  },

  changeLanguage() {
    const codes = ["ControlLeft", "AltLeft"];
    let pressed = new Set();

    document.addEventListener("keydown", function (event) {
      pressed.add(event.code);

      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();

      // function for changing language
      this.lang = localStorage.getItem("lang");
      if (this.lang === "rus") {
        localStorage.setItem("lang", "eng");
        Keyboard.languageHidden();
      } else {
        localStorage.setItem("lang", "rus");
        Keyboard.languageHidden();
      }
    });

    document.addEventListener("keyup", function (event) {
      pressed.delete(event.code);
    });
  },

  buttonActivate(e) {
    const activeElement = document.querySelector(`.${e.code}`);
    const textArea = document.querySelector(".textarea");

    activeElement.classList.add(`active`);
    const child = activeElement.querySelector(`.${this.lang}`);
    if (!notWritingElemements.includes(e.code)) {
      textArea.value += child.innerText;
    }
  },

  buttonDeactivate(e) {
    document
      .querySelectorAll(".keyboard-key")
      .forEach((e) => e.classList.remove("active"));
  },

  mouseActivate(e) {
    console.log(e.classList);
  },
};

export { Keyboard };
