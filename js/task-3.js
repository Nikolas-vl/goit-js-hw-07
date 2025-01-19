const inputName = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
inputName.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  if (value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = value;
  }
});

const mainText = document.querySelector("h1");

inputName.classList.add("styled-input");
mainText.classList.add("styled-main-text");
