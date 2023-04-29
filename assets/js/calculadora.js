

// Suma
const suma = () => {
    const numeroUno = parseInt(document.getElementById("numeroUno").value);
    const numeroDos = parseInt(document.getElementById("numeroDos").value);
    const resultado = numeroUno + numeroDos;
    document.getElementById("resultado").value = resultado;
};

// Resta
const resta = () => {
    const numeroUno = parseInt(document.getElementById("numeroUno").value);
    const numeroDos = parseInt(document.getElementById("numeroDos").value);
    const resultado = numeroUno - numeroDos;
    document.getElementById("resultado").value = resultado;
};

const multiplica = () => {
    const numeroUno = parseInt(document.getElementById("numeroUno").value);
    const numeroDos = parseInt(document.getElementById("numeroDos").value);
    const resultado = numeroUno * numeroDos;
    document.getElementById("resultado").value = resultado;
};
const dividir = () => {
    const numeroUno = parseInt(document.getElementById("numeroUno").value);
    const numeroDos = parseInt(document.getElementById("numeroDos").value);
    const resultado = numeroUno / numeroDos;
    document.getElementById("resultado").value = resultado;
};