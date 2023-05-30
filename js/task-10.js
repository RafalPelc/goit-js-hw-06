function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const boxes = document.querySelector("#boxes");
const amount = document.querySelector("#controls input");
let width = 30;
let height = 30;

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const newAmount = Number(amount.value);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < newAmount; i++) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${width}px`;
    newBox.style.height = `${height}px`;
    fragment.appendChild(newBox);
    width += 10;
    height += 10;
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  amount.value = "";
  width = 30;
  height = 30;
}
