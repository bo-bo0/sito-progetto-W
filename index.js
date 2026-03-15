const progress = 70;

const label = document.querySelector('.loader__label');
const bar = document.querySelector('.loader__bar');

if (label) {
  label.textContent = `${progress}%`;
}

if (bar) {
  bar.style.setProperty('--progress', `${progress}%`);
}
