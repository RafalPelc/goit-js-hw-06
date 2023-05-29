const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function setFontSize() {
  text.style.fontSize = `${input.value}px`;
}

setFontSize();

input.addEventListener("input", setFontSize);
