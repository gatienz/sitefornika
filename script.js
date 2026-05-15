// script.js

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const successScreen = document.getElementById("successScreen");

const messages = [
  "Ты настолько занята? 🥺",
  "Ну пожааалуйста",
  "Всего одно воскресенье 😔",
  "Я буду скучать",
  "Ты уверена?",
  "Это твой окончательный ответ?",
  "А если хорошо подумать?",
  "Кнопка «Нет» кажется сломанной 🤔"
];

let count = 0;
let yesScale = 1;

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  message.textContent = messages[count % messages.length];

  count++;

  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.body.style.background = "#ffd1e8";
  successScreen.classList.add("show");
});
