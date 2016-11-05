/*
EVENTOS de Node.JS
*/
// Importamos el modulo de eventos.
var events = require('events');
// Creamos un emisor de eventos para probarlos.
var eventEmitter = new events.EventEmitter();
// Creamos una funcion que logea algo, como ejemplo.
var logExample = function logSomething() {
  console.log('Aquí está tu sandwich.');
}
// Vamos a hacer un bind entre la función y un evento de ejemplo.
// Esta funcion añadira un listener en el array de listeners.
eventEmitter.on('sudomakemeasandwich', logExample);
// Esta la añade y, al pasar una vez, se elimina de la lista.
eventEmitter.once('sudomakemeasandwich', logExample);
// Y ahora lo disparamos.
eventEmitter.emit('sudomakemeasandwich');
// Podemos ver los listeners asociados a un event.
eventEmitter.listeners('sudomakemeasandwich');
// Finalmente, podemos eliminar tambien el listener.
eventEmitter.removeListener('sudomakemeasandwich', logExample);
// Entonces, este emit no funcionará.
eventEmitter.emit('sudomakemeasandwich');
console.log('Programa terminado');
