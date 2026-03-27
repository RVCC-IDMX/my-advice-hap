import { getAdviceByMood } from "./matching.js";

const form = document.getElementById("advice-form");
const output = document.getElementById("advice-output");

function renderAdvice(items) {
  output.textContent = "";
  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No advice found for that mood.";
    output.appendChild(empty);
    return;
  }
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "advice-card";
    card.innerHTML = `<p>${item.text}</p><span class="advice-tag">${item.category}</span>`;
    output.appendChild(card);
  });
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mood = document.getElementById("mood-select").value;
    const results = getAdviceByMood(mood);
    renderAdvice(results);
  });
}
