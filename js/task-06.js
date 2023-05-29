const input = document.querySelector("#validation-input");
const lengthValue = input.getAttribute("data-length");

function blur() {
  if (this.value.length === Number(lengthValue)) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else if (this.value.length === 0) {
    this.classList.remove("valid", "invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}

input.addEventListener("blur", blur);
