const { body } = document;

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.appendChild(wrapper);

const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = 'RSS Виртуальная клавиатура';
wrapper.appendChild(h1);

const textarea = document.createElement('textarea');
textarea.setAttribute('autofocus', 'autofocus');
document.onclick = () => {
  textarea.focus();
};

textarea.classList.add('output');
wrapper.appendChild(textarea);

// create keayboard
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

// insideKeyboard
const insideKeyboard = document.createElement('div');
insideKeyboard.classList.add('insideKeyboard');
keyboard.appendChild(insideKeyboard);

// TEXT HOW TO CHACGE LANGUAGE
const paragraghOne = document.createElement('p');
paragraghOne.classList.add('text');
paragraghOne.textContent = 'Клавиатура создана в операционной системе MacOs';
wrapper.appendChild(paragraghOne);

const paragraghTwo = document.createElement('p');
paragraghTwo.classList.add('text');
paragraghTwo.textContent = 'Для переключения языка комбинация: левыe ctrl + alt (Win) или ctrl + space (MacOs)';
wrapper.appendChild(paragraghTwo);

const kWordLow = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\',
  'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'fn', 'ctrl', 'opt', 'cmd', ' ', 'cmd', 'opt', '◄', '▼', '►'];

const kWordUp = ['±', '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Enter',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|',
  'Shift', '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
  'fn', 'ctrl', 'opt', 'cmd', ' ', 'cmd', 'opt', '◄', '▼', '►'];

const rusLow = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Enter',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё',
  'Shift', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift',
  'fn', 'ctrl', 'opt', 'cmd', ' ', 'cmd', 'opt', '◄', '▼', '►'];

const rusUp = ['!', '"', '№', '%', '%', ':', ',', '.', ';', '(', ')', '_', '_', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Enter',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Ё',
  'Shift', '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', '▲', 'Shift',
  'fn', 'ctrl', 'opt', 'cmd', ' ', 'cmd', 'opt', '◄', '▼', '►'];

const keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash',
  'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'fn', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const kWord = kWordLow;

// add kWord inside insideKeyboard and add class
const init = () => {
  let out = '';
  for (let i = 0; i < kWord.length; i += 1) {
    out += `<button class="btn-${i} btn" data="${keyCode[i]}">${kWord[i]}</button>`;
  }
  document.querySelector('.insideKeyboard').innerHTML = out;
};
init();

const backspace = document.querySelector('.btn-13');
const tab = document.querySelector('.btn-14');
const enter = document.querySelector('.btn-27');
const capsLock = document.querySelector('.btn-28');
const shiftLeft = document.querySelector('.btn-41');
const arrowUp = document.querySelector('.btn-53');
const shiftRight = document.querySelector('.btn-54');
const fn = document.querySelector('.btn-55');
const ctrl = document.querySelector('.btn-56');
const optLeft = document.querySelector('.btn-57');
const metaLeft = document.querySelector('.btn-58');
const space = document.querySelector('.btn-59');
const metaRight = document.querySelector('.btn-60');
const optRight = document.querySelector('.btn-61');
const arrowLeft = document.querySelector('.btn-62');
const arrowDown = document.querySelector('.btn-63');
const arrowRight = document.querySelector('.btn-64');

// style for only black key
const addBlackKeysClass = () => {
  backspace.classList.add('black-keys');
  backspace.classList.add('backspace');
  tab.classList.add('black-keys');
  tab.classList.add('tab');
  enter.classList.add('black-keys');
  enter.classList.add('enter');
  capsLock.classList.add('black-keys');
  capsLock.classList.add('caps-lock');
  shiftLeft.classList.add('black-keys');
  shiftLeft.classList.add('shift-left');
  arrowUp.classList.add('black-keys');
  arrowUp.classList.add('arrow');
  shiftRight.classList.add('black-keys');
  shiftRight.classList.add('shift-right');
  fn.classList.add('black-keys');
  fn.classList.add('fn');
  ctrl.classList.add('black-keys');
  ctrl.classList.add('ctrl');
  optLeft.classList.add('black-keys');
  optLeft.classList.add('opt');
  metaLeft.classList.add('black-keys');
  metaLeft.classList.add('meta');
  space.classList.add('space');
  metaRight.classList.add('black-keys');
  metaRight.classList.add('meta');
  optRight.classList.add('black-keys');
  optRight.classList.add('opt');
  arrowLeft.classList.add('black-keys');
  arrowLeft.classList.add('arrow');
  arrowDown.classList.add('black-keys');
  arrowDown.classList.add('arrow');
  arrowRight.classList.add('black-keys');
  arrowRight.classList.add('arrow');
};
addBlackKeysClass();

// KEYDOWN ACTIVE

const buttons = document.querySelectorAll('.btn');

document.addEventListener('keydown', (event) => {
  buttons.forEach((e) => {
    if (e.getAttribute('data') === event.code) {
      e.classList.add('active');
    }
  });
});

// KEYUP ACTIVE
document.addEventListener('keyup', () => {
  document.querySelectorAll('.insideKeyboard button').forEach((e) => {
    e.classList.remove('active');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    textarea.value += '▲';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    textarea.value += '▼';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    textarea.value += '◄';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    textarea.value += '►';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    textarea.value += '\t';
    event.preventDefault();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (insideKeyboard.children[0].innerHTML === kWordLow[0]) {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordUp[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '&gt;') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusUp[i];
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (insideKeyboard.children[0].innerHTML === kWordUp[0]) {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordLow[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === rusUp[0]) {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusLow[i];
      }
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'CapsLock') {
    if (insideKeyboard.children[0].innerHTML === kWordLow[0]) {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordUp[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '&gt;') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusUp[i];
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'CapsLock') {
    if (insideKeyboard.children[0].innerHTML === kWordUp[0]) {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordLow[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === rusUp[0]) {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusLow[i];
      }
    }
  }
});

// CHANGE LANGUAGE FOR WIN:
document.addEventListener('keydown', (event) => {
  if (event.altKey && event.ctrlKey) {
    if (insideKeyboard.children[0].innerHTML === '§') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusLow[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '&gt;') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordLow[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '±') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusUp[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '!') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordUp[i];
      }
    }
  }
});

// CHANGE LANGUAGE FOR OS:
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.code === 'Space') {
    if (insideKeyboard.children[0].innerHTML === '§') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusLow[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '&gt;') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordLow[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '±') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = rusUp[i];
      }
    } else if (insideKeyboard.children[0].innerHTML === '!') {
      for (let i = 0; i < insideKeyboard.children.length; i += 1) {
        insideKeyboard.children[i].innerHTML = kWordUp[i];
      }
    }
  }
});

// MOUSE
