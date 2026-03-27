import { getAdviceByMood } from './matching.js';

const form = document.querySelector('#advice-form');
const output = document.querySelector('#advice-output');

function renderAdvice(items) {
  output.textContent = '';
  if (items.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'No advice found for that mood.';
    output.appendChild(empty);
    return;
  }
  items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'advice-card';
    const text = document.createElement('p');
    text.textContent = item.text;
    const tag = document.createElement('span');
    tag.className = 'advice-tag';
    tag.textContent = item.category;
    card.appendChild(text);
    card.appendChild(tag);
    output.appendChild(card);
  });
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mood = document.querySelector('#mood-select').value;
    const results = getAdviceByMood(mood);
    renderAdvice(results);
  });
}
