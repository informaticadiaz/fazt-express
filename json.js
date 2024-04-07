const express = require('express')

const app = express()


// metodos de express
// el metodo text transforma el body a texto plano
app.use(express.text())
// el metodo json transforma el body a un objeto JSON
app.use(express.json())
// el metodo urlencoded interpreta los datos 
// que vienen desde un formulario 
// y los transforma en un objeto JSON
app.use(express.urlencoded({ extended: false }))
// los metodos tiene que estar escritos
// antes que la solicitud

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('Nuevo usario creado')
})


app.listen(3000)
console.log('Server listening on port 3000')