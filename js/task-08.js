const form = document.querySelector(".login-form");

function send(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny być wypełnione");
  }

  const obj = {
    Email: email.value,
    Password: password.value,
  };

  console.log(obj);
  event.currentTarget.reset();
}

form.addEventListener("submit", send);
