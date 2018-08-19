{
  const copyToClipboard = (selector) => {
    const ele = document.querySelector(selector);
    const textBox = document.createElement('textarea');
    textBox.textContent = (ele.textContent.length ? ele.textContent : ele.value);
    textBox.style.position = 'absolute';
    textBox.style.top = '-1000px';
    document.body.appendChild(textBox);
    textBox.select();
    document.execCommand('copy');
    document.body.removeChild(textBox);
  };

  const copyButtons = [...document.querySelectorAll('[data-copy-target]')];

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => { copyToClipboard(btn.dataset.copyTarget); });
  });
}
