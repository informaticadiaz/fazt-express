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

app.listen(3000)
console.log('Server listening on port 3000')