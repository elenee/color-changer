const button = document.getElementById("button");
const text = document.getElementById("text");
const body = document.body;

button.addEventListener("click", changefnc);

console.log(button);
function changefnc() {
  const c1 = getRandomRGB();
  const c2 = getRandomRGB();
  const c3 = getRandomRGB();
  const cstr = `rgb(${c1}, ${c2}, ${c3})`;
  body.style.background = cstr;
  text.innerText = cstr;
}

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}
