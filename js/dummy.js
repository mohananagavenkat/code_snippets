/* eslint-disable func-names */
const _ = function (id) {
  return document.getElementById(id);
};

const content = _('content');

// console.log(content.innerHTML);

const color = _('color');
const fs = _('font-size');
const bold = _('bold');
const underline = _('underline');
const italic = _('italic');

const changeContentStyle = function (prop, value) {
  content.style[prop] = value;
};

color.addEventListener('input', function () {
  changeContentStyle('color', `#${this.value}`);
  _('color-preview').style.background = `#${this.value}`;
});

fs.addEventListener('input', function () {
  changeContentStyle('fontSize', `${this.value}px`);
});

bold.addEventListener('click', function () {
  return this.checked ? changeContentStyle('fontWeight', 'bold') : changeContentStyle('fontWeight', 'normal');
});

underline.addEventListener('click', function () {
  return this.checked ? changeContentStyle('textDecoration', 'underline') : changeContentStyle('textDecoration', 'none');
});

italic.addEventListener('click', function () {
  return this.checked ? changeContentStyle('fontStyle', 'italic') : changeContentStyle('fontStyle', 'normal');
});


const something = 'let this happen';
console.log(something);
