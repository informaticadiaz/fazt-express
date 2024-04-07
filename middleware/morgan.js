const express = require('express')
const morgan = require('morgan')

const app = express()

// middleware de express
app.use(express.json())

// middleware de morgan
app.use(morgan('dev'))

// recorda que un middleware es una funcion
// la cual se ejecuta antes de las rutas

app.get('/about', (req, res) => {
  res.send('about page')  
})

app.all('/user', (req, res) => {
  res.send('user page')
})

app.listen(3000)
console.log('Server listening on port 3000')

// recorda que morgan es un middleware
// morgan es una dependencia
// recorda que express.json es un middleware
// esta ya viene incluida en express
// hay muchos mas middlewares en express
// hay muchos mas middlewares que se pueden 
// instalar como dependencias