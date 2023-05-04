function cambiarNombre() {
    // Pide al usuario que ingrese su nombre
    var nombre = prompt("¿Cuál es tu nombre?");
  
    // Actualiza el texto de saludo
    var saludo = document.getElementById("saludo");
    saludo.innerHTML = "Hola " + nombre;
}
  