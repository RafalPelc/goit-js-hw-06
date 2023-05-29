const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

button.addEventListener("click", changeColor);

function changeColor() {
  let color = getRandomHexColor();
  spanColor.innerHTML = `${color}`;
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
