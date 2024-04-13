const express = require('express')
const morgan = require('morgan')

const app = express()

// en express debemos mantener un orden de ejecuccion
// primero van los settings
// despues van los middlewares
// despues van las rutas

// settings

// esta es una forma de guardar variables en express
// app.set guarda una variable
// puedo guardar una configuracion de express 
// y poder modificar todo desde aqui
app.set('appName', 'Express Course')
app.set('port', 3000)
// palabras reservadas en express
// sirven para configurar express
// diferencia en la ruta mayusculas de minusculas
app.set('case sensitive routing', true)

// middlewares

app.use(express.json())
app.use(morgan('dev'))

// rutas

app.get('/', (req, res) => {
  res.send('Hello World')
})

// app.get obtiene una variable
// nombre de la variable port
// valor de la variable 3000
app.listen(app.get('port'))
// nombre de la variable appName
// valor de la variable Express Course
console.log(`Server ${app.get('appName')} listening on port ${app.get('port')}`)

