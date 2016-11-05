/*
LEER FICHERO con Node.JS
*/

// Cargamos la dependencia de Node.JS necesaria para los ficheros.
var fs = require("fs");
// Leemos el archivo y guardamos su contenido.
// METODO 1, bloqueando el hilo del programa.
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Programa terminado');
// METODO 2, no bloqueamos el hilo del programa.
fs.readFile('input.txt', function (err, data) {
  // Si ocurre un error, printamos el resultado.
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});
console.log('Programa terminado');
