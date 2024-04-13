// utilizando el modulo ejs 
// que nos sirve para
// procesar archivos html en el backend
// cuandp instalo ejs en mi proyecto
// puedo usarlo para renderizar archivos html
// los motores de plantilla nos permiten 
// enviar algo mas que archivos HTML
// por ejemplo valores de variables
// los motores de plantilla nos permiten
// dividir una interfaz de html 
// en multiples partes 
// y despues poder combinarlas

const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('ejs')
const axios = require('axios')

const app = express()

// settings
app.set('appName', 'Express Course')
app.set('port', 3000)
// configurando el motor de plantillas
app.set('view engine', 'ejs')
// configurando la ruta de las plantillas
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('./public'))


// usando EJS
// renderizando archivos HTML

app.get('/', (req, res) => {
  let isActive = true

  const users = [
    {
      id: 1,
      name: 'John',
      lastname: 'Connor'
    },
    {
      id: 2,
      name: 'Sara',
      lastname: 'Connor'
    }
  ]

  const title = 'Mi pagina principal'

  res.render('index', {
    title,
    isActive,
    users
  })
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/users', (req, res) => {
  res.render('users')
})

app.get('/posts', async (req, res) => {

  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response.data)

  res.render('posts', {
    posts: response.data
  })
})

app.listen(app.get('port'))
