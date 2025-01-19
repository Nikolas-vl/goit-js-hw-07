function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
});

const text = document.querySelector("p");
const btnStyle = document.querySelector("button");

text.classList.add("styled-text");
btnStyle.classList.add("styled-color-btn");
