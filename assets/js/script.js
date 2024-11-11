const keys = document.querySelectorAll(".keys");
const textarea = document.querySelector("textarea");
const deleteBtn = document.getElementById("delete");
const shiftBtn = document.getElementById("shift");
const spaceBtn = document.getElementById("space");
const resetBtn = document.getElementById("resetBtn");

let chars = [];

keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

deleteBtn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

spaceBtn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

shiftBtn.addEventListener("click", () => {
  keys.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});

resetBtn.addEventListener("click", () => {
  textarea.value = "";
});

function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
