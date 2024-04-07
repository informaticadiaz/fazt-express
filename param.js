const express = require('express')

const app = express()

// Parametros

// Parametros simples
app.get('/hello/:user', (req, res) => {
  res.send(`Hello ${req.params.user}`)
})

// Usa parametros dentro de rutas
// Usa toUpperCase para convertir a mayúsculas
app.get('/futbol/:messi', (req, res) => {
  console.log(typeof req.params.messi)
  res.send(`Futbol ${req.params.messi.toUpperCase()}`)
})

// Parametros con multiples valores
// Sin destructuración
// usamos parseInt para convertir los valores
app.get('/add/:a/:b', (req, res) => {
  console.log(req.params.a)
  console.log(req.params.b)

  const result = parseInt(req.params.a) + parseInt(req.params.b)
  res.send(`Resultado: ${result}`)
})

// Parametros con multiples valores
// Con destructuración
app.get('/sum/:a/:b', (req, res) => {
  const { a, b } = req.params
  res.send(`Resultado: ${parseInt(a) + parseInt(b)}`)
})

// En este caso usamos una validacion
// utilizo un if para la validación
// cuando el usuario sea js
// cuando en la ruta sea users/js/photo
// se envia un archivo de imagen
// si no es asi
// se envia un mensaje
app.get('/users/:username/photo', (req, res) => {
  if (req.params.username === 'js') {
    return res.sendFile('./static/javascript.png', {
      root: __dirname
    })
  }
  
  res.send('el usario no tiene acceso')
})

// En este caso usamos dir/param/dir/param
// es una opcion valida para la ruta
// no es necesario que los parametros
// esten uno detras del otro. 
app.get('/name/:name/age/:age', (req, res) => {
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})

app.listen(3000)
console.log('Server listening on port 3000')