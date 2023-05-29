let counterValue = 0;
const span = document.querySelector("#value");

const buttonDec = document.querySelector('button[data-action="decrement"]');
console.log(buttonDec);

const buttonInc = document.querySelector('button[data-action="increment"]');
console.log(buttonInc);

const decrementClick = () => {
  counterValue -= 1;
  span.innerHTML = counterValue;
};

const incrementClick = () => {
  counterValue += 1;
  span.innerHTML = counterValue;
};

buttonInc.addEventListener("click", incrementClick);
buttonDec.addEventListener("click", decrementClick);
