const express = require('express')

const app = express()

// response send es texto plano
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/weather', (req, res) => {
  res.send('The current weather is Nice')
})

// response sendFile es un archivo
app.get('/miarchivo', (req, res) => {
  res.sendFile('./static/javascript.png', {
    root: __dirname
  })
})

// response json es un objeto JSON
app.get('/user', (req, res) => {
  res.json({
    "name": "John",
    "lastname": "Connor",
    "age": 10,
    address: {
      city: "Chatsworth",
      street: "20902 Lassen Street",
    }
  })
})

// response res es un estado
app.get("/isalive", (req, res) => {
  res.sendStatus(204)
})

app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina')
})


app.listen(3000)
console.log(`Server on port ${3000}`)
