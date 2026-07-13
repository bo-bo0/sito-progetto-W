const progress = 65;

const label = document.querySelector('.loader__label');
const bar = document.querySelector('.loader__bar');

if (label) {
  label.textContent = `${progress}%`;
}

if (bar) {
  bar.style.setProperty('--progress', `${progress}%`);
}
