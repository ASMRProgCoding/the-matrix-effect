import { Symbol } from "./symbol.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const fontSize = 18;
const fps = 60;
const frameDurationMs = 1000 / fps;
const textColor = "#33ff33";
let symbols = [];

function init() {
  symbols = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const columns = canvas.width / fontSize;

  for (let i = 0; i < columns; i += 1)
    symbols.push(new Symbol(i, fontSize, canvas.height));
}

let timer = 0;
let prevTime = 0;
function draw(timeStamp) {
  const delta = timeStamp - prevTime;
  prevTime = timeStamp;

  if (timer > frameDurationMs) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = textColor;
    symbols.forEach((s) => s.update(ctx));

    timer = 0;
  } else {
    timer += delta;
  }

  requestAnimationFrame(draw);
}

init();
draw(0);

window.addEventListener("resize", () => {
  init();
});
