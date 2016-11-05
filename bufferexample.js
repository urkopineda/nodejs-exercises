/*
BUFFERs con Node.JS
*/

// Creamos un buffer.
var buf = new Buffer(12);
// Escribimos en el.
var len = buf.write('Hola, mundo!');
// Visualizar el buffer (desde el principio hasta donde hemos escrito, encoding por defecto es UTF-8)
console.log(buf.toString('utf8', 0, len));
// Longitud del buffer.
console.log('Longitud del buffer: ' + len);
// Incluso podemos convertir un buffer en JSON.
console.log(buf.toJSON());
// Creamos otro buffer.
var buf1 = new Buffer(30);
// Escribimos en el.
buf1.write(' Que pesado con el hola mundo.');
// Longitud del buffer.
var len1 = buf1.length;
console.log('Longitud del buffer: ' + len1);
// Podemos concatenar bufferes.
var buftot = Buffer.concat([buf, buf1]);
// Y visualizarlo.
console.log(buftot.toString())
console.log('Programa terminado');
