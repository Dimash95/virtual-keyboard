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

const kWordLow = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\',
  'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'fn', 'ctrl', 'opt', 'Cmd', ' ', 'Cmd', 'opt', '◄', '▼', '►'];

const kWordUp = ['±', '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Enter',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|',
  'Shift', '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
  'fn', 'ctrl', 'opt', 'Cmd', ' ', 'Cmd', 'opt', '◄', '▼', '►'];

let kWord = kWordLow;

// add kWord inside insideKeyboard and add class
const init = () => {
  let out = '';
  for (let i = 0; i < kWord.length; i++) {
    out += `<button class="btn-${i}" data="${kWord[i]}"> ${kWord[i]} </button>`;
  }
  document.querySelector('.insideKeyboard').innerHTML = out;
};
init();

// MOUSE
document.querySelectorAll('.insideKeyboard button').forEach((e) => {
  e.onclick = () => {
    document.querySelectorAll('.insideKeyboard button').forEach((element) => {
      element.classList.remove('active');
    });
    const code = this.getAttribute('data');
    this.classList.add('active');

    textarea.value += code;
  };
});

// off Tab
window.onkeydown = (evt) => {
  if (evt.key === 'Tab') {
    evt.preventDefault();
  }
};

const backspace = document.querySelector('.btn-13');
const tab = document.querySelector('.btn-14');
const enter = document.querySelector('.btn-27');
const capsLock = document.querySelector('.btn-28');
const backslash = document.querySelector('.btn-40');
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
const addActiveClass = () => {
  backspace.classList.add('black-keys');
  tab.classList.add('black-keys');
  enter.classList.add('black-keys');
  enter.classList.add('enter');
  capsLock.classList.add('black-keys');
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
  metaLeft.classList.add('cmd');
  space.classList.add('space');
  metaRight.classList.add('black-keys');
  metaRight.classList.add('cmd');
  optRight.classList.add('black-keys');
  optRight.classList.add('opt');
  arrowLeft.classList.add('black-keys');
  arrowLeft.classList.add('arrow');
  arrowDown.classList.add('black-keys');
  arrowDown.classList.add('arrow');
  arrowRight.classList.add('black-keys');
  arrowRight.classList.add('arrow');
};
addActiveClass();

// TODO:text
document.onkeydown = (event) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    textarea.value += '▲';
    arrowUp.classList.add('active');
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    textarea.value += '▼';
    arrowDown.classList.add('active');
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    textarea.value += '◄';
    arrowLeft.classList.add('active');
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    textarea.value += '►';
    arrowRight.classList.add('active');
  }
  if (event.key === 'Tab') {
    textarea.value += '\t';
  }
  if (event.key === 'Control') {
    ctrl.classList.add('active');
  }
  if (event.code === 'MetaLeft') {
    metaLeft.classList.add('active');
  }
  if (event.code === 'MetaRight') {
    metaRight.classList.add('active');
  }
  if (event.code === 'AltLeft') {
    optLeft.classList.add('active');
  }
  if (event.code === 'AltRight') {
    optRight.classList.add('active');
  }
  if (event.code === 'ShiftLeft') {
    shiftLeft.classList.add('active');
    kWord = kWordUp;
    init();
    addActiveClass();
    console.log(insideKeyboard);
  }
  if (event.code === 'ShiftRight') {
    shiftRight.classList.add('active');
  }
  if (event.code === 'Backslash') {
    backslash.classList.add('active');
  }

  if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Control' && event.code !== 'AltLeft' && event.code !== 'AltRight' && event.code !== 'MetaLeft' && event.code !== 'MetaRight' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'Backslash') {
    document.querySelector(`.insideKeyboard [data="${event.key}"]`).classList.add('active');
  }

  console.log(event.key);
};

// REMOVE ACTIVE
document.onkeyup = (event) => {
  document.querySelectorAll('.insideKeyboard button').forEach((e) => {
    e.classList.remove('active');
  });
  if (event.code === 'ShiftLeft') {
    kWord = kWordLow;
    init();
    addActiveClass();
  }
};

// const changeLetter = () => {

// }
