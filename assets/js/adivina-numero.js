const numeroElement = document.getElementById("numero");
const menorButton = document.getElementById("menor");
const igualButton = document.getElementById("igual");
const mayorButton = document.getElementById("mayor");
const resetButton = document.getElementById("reset");

let min = 1;
let max = 100;
let estimado = Math.floor((max + min) / 2);
let juegoTerminado = false;
resetButton.style.visibility = "hidden";

const actualizarNumero = (numero) => numeroElement.textContent = numero;

const adivinarNumero = (numero) => {
  if (numero === estimado) {
    actualizarNumero(`Tu número es el ${estimado}, excelente decisión`);
    menorButton.disabled = true;
    mayorButton.disabled = true;
    resetButton.style.visibility = "visible";
    juegoTerminado = true;
  } else if (numero < estimado) {
    max = estimado - 1;
    estimado = Math.floor((max + min) / 2);
    actualizarNumero(estimado);
  } else {
    min = estimado + 1;
    estimado = Math.floor((max + min) / 2);
    actualizarNumero(estimado);
  }
};

const reiniciarJuego = () => {
  menorButton.disabled = false;
  mayorButton.disabled = false;
  resetButton.style.visibility = "hidden";
  min = 1;
  max = 100;
  estimado = Math.floor((max + min) / 2);
  actualizarNumero(estimado);
  juegoTerminado = false;
};

menorButton.addEventListener("click", () => adivinarNumero(estimado - 1));
igualButton.addEventListener("click", () => adivinarNumero(estimado));
mayorButton.addEventListener("click", () => adivinarNumero(estimado + 1));
resetButton.addEventListener("click", reiniciarJuego);

actualizarNumero(estimado);
