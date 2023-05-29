const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const input = (event) => {
  if (textInput.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
};

textInput.addEventListener("input", input);
