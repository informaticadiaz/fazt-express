# Servidor HTTP Básico en Node.js

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const read = fs.createReadStream('./static/index.html')
  read.pipe(res)
})

server.listen(3000)
console.log('Listening on port 3000')
```

Este código implementa un servidor HTTP básico en Node.js
que sirve un archivo estático `index.html`
cuando se hace una solicitud a través del puerto 3000.

Estructura del Código:

1. Importación de módulos:
   - Se importan los módulos `http` y `fs` de Node.js.
   - `http` se utiliza para crear el servidor HTTP.
   - `fs` se utiliza para interactuar con el sistema de archivos y leer el archivo `index.html`.

2. Creación del servidor:
   - Se utiliza el método `createServer` del módulo `http` para crear un servidor HTTP.
   - Se pasa una función de callback que se ejecutará cada vez que el servidor reciba una solicitud.
   - La función de callback toma dos argumentos: `req` (la solicitud recibida) y `res` (la respuesta que se enviará al cliente).

3. Lectura del archivo estático:
   - Se crea un stream de lectura utilizando el método `createReadStream` del módulo `fs`.
   - Este stream leerá el archivo `index.html` ubicado en la carpeta `static`.

4. Piping de streams:
   - Se utiliza el método `pipe` para conectar el stream de lectura al stream de escritura (la respuesta HTTP que se enviará al cliente).
   - Esto asegura que todo lo que se lea del archivo `index.html` se envíe directamente como respuesta al cliente.

5. Inicio del servidor:
   - Se utiliza el método `listen` del servidor para que escuche las solicitudes entrantes en el puerto 3000.

6. Mensaje de confirmación:
   - Se imprime un mensaje en la consola para indicar que el servidor está escuchando en el puerto 3000.

Uso:

- Para ejecutar este servidor, asegúrate de tener un archivo `index.html` en la carpeta `static`.

- Ejecuta el código con Node.js y accede a `http://localhost:3000` en tu navegador para ver el archivo `index.html`.
