// Fecha js

const diasNoLaborales = [0, 6];
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const esLaborable = (diaSemana) => diasNoLaborales.includes(diaSemana) ? 'fin de semana' : 'laborable';

const esAnioBisiesto = (anio) => (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;

const obtenerDiaSemana = (fecha) => fecha.getDay();

const obtenerDiasMes = (mes, anio) => {
    let maxDias = 31;
    switch (mes) {
        case 2:
            maxDias = esAnioBisiesto(anio) ? 29 : 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            maxDias = 30;
            break;
    };
    return maxDias;
};

const validarFecha = (dia, mes, anio) => {
    if (anio < 0) return "Por favor, ingrese un año válido (mayor o igual a 0).";
    if (mes < 1 || mes > 12) return "Por favor, ingrese un mes válido (entre 1 y 12).";
    const maxDias = obtenerDiasMes(mes, anio);
    if (dia < 1 || dia > maxDias) return "Por favor, ingrese un día válido para el mes seleccionado.";
    return '';
};

const calcularFecha = () => {
    const inputDia = parseInt(document.getElementById('dia').value);
    const inputMes = parseInt(document.getElementById('mes').value);
    const inputAnio = parseInt(document.getElementById('anio').value);
    const resultado = document.getElementById('resultado');
    const error = validarFecha(inputDia, inputMes, inputAnio);
    if (error)
        return resultado.textContent = error;
    const diaSemana = obtenerDiaSemana(new Date(inputAnio, inputMes - 1, inputDia));
    resultado.textContent = `${diasSemana[diaSemana]} ${esLaborable(diaSemana) === 'laborable' ? ', día laborable' : ', fin de semana'}`;
};

const dia = document.getElementById("dia");
const calcular = document.getElementById('calcular');

dia.addEventListener("input", () => {
    calcular.disabled = !dia.value;
});

calcular.addEventListener('click', calcularFecha);