const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fElements = event.currentTarget.elements;
  const email = fElements.email.value.trim();
  const password = fElements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formObj = {
    email: email,
    password: password,
  };
  console.log(formObj);
  loginForm.reset();
});

const formLabel = document.querySelectorAll("label");
const formInput = document.querySelectorAll("input");
const btn = document.querySelector("button");

loginForm.classList.add("styled-form");
formLabel.forEach((label) => {
  label.classList.add("styled-label");
});
formInput.forEach((input) => {
  input.classList.add("styled-form-input");
});
btn.classList.add("styled-sub-btn");
