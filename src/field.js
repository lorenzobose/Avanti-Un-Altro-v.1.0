//// Lo script crea un div(field), che conterrà tutto il gioco e che si adatta alla misura dello schermo del giocatore, mantenendo però il 16:9


const fieldWidth = 1920;
const fieldHeight = 1080;

document.body.style.backgroundColor = "#202020";

let field = document.createElement("div");
document.body.appendChild(field);
field.style.position = "absolute";
field.style.transformOrigin = `0px 0px`;
field.style.width = fieldWidth + "px";
field.style.height = fieldHeight + "px";
field.style.overflow = "hidden"
field.style.backgroundColor = "#002db3";

function fit() {
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let xScale = windowWidth / fieldWidth;
let yScale = windowHeight / fieldHeight;
let scale = Math.min(xScale, yScale);

let xMargin = (windowWidth - scale * fieldWidth) / 2;
let yMargin = (windowHeight - scale * fieldHeight) / 2;

field.style.transform = `scale(${scale})`;
field.style.left = `${xMargin}px`;
field.style.top = `${yMargin}px`;
}

fit();

addEventListener("resize", fit);
addEventListener("DOMContentLoaded", fit);