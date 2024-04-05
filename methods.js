const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Servidor Activo')
})

app.get('/products', (req, res) => {
  res.send('lista de productos')
})

app.post('/products', (req, res) => {
  res.send('crear un producto')
})

app.put('/products', (req, res) => {
  res.send('actualizar un producto')
})

app.delete('/products', (req, res) => {
  res.send('borrar un producto')
})

app.patch('/products', (req, res) => {
  res.send('actualizar parcialmente un producto')
})

app.listen(3000)