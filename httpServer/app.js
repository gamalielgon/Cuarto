var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello world\n');
}).listen(1337, '127.0.0.1');
/*Lo que sucede al ejecutar el app.js es que se queda a la escucha,
me bloquea la terminal, para que no escriba nada, y la terminal se queda espernado
solicitudes para poder atenderlas.

Cuando abro la ventana de localhost me aparece la nueva pestaña con un
texto que dice "Hello world" justo como lo tengo delcarado.

En los heades me aparece el tipo de informacion que tiene mi archivo,
en este caso es texto plano, no tiene formato alguno, etc.
*/