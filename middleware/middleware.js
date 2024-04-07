const express = require('express')

const app = express()

/* middleware
es una funcion
que se ejecuta antes de las rutas
podemos usar req dentro de la funcion
tambien podemos usar res
Osea podemos obtener una peticion
y enviar una respuesta con request y response
tambien podemos usar next
*/


/* Middleware
Este middleware se añade a la aplicación Express 
usando el método `use`.*/

/* Parametros
Toma tres parámetros: 
req (objeto de solicitud), 
res (objeto de respuesta) 
next: next es una función  
(función de callback para pasar al siguiente middleware).
*/

app.use((req, res, next) => {
  // Obtener la fecha y hora actual
  const now = new Date();
  // Formatear la fecha y hora en formato de cadena legible
  const formatedTime = now.toLocaleTimeString();
  // Imprimir la fecha y hora formateadas en la consola
  console.log('Time:', formatedTime);

  // Registra información sobre la solicitud actual en la consola.
  // Utiliza interpolación de cadenas (`) para incluir el método de solicitud (req.method) y la ruta de la solicitud (req.url).
  console.log(`Request: Metodo: ${req.method} Route: ${req.url}`);

  // Llama a la función next() para pasar al siguiente middleware en la cadena de middleware.
  next();
});

// cada vez que visitamos la ruta /profile
// se ejecuta el middleware
app.get('/profile', (req, res) => {
  res.send('profile page')
})

// cada vez que visitamos la ruta /about
// se ejecuta el middleware
app.all('/about', (req, res) => {
  res.send('about page')
})

// el middleware se ejecuta antes de las rutas


app.listen(3000)
console.log('Server listening on port 3000')