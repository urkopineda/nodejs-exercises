/*
'HOLA MUNDO' con Node.JS
*/

// Cargamos la instancia HTTP de esta manera.
var http = require("http");
var port = 8080;
// Creamos el servidor de Node.JS, con una función de respuesta.
http.createServer(function (request, response) {
  // Escribimos una cabecera HTTP con un código 200.
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hola mundo!');
}).listen(port); // Establecemos el puerto de escucha de servidor.
console.log('Servidor creado en el puerto ' + port + '.');
