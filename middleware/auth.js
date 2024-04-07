// utilizo un middleware de express
// para proteger una ruta

const express = require('express')

const app = express()

// primero pasa por este middleware
// primer middleware
app.use((req, res, next) => {
  console.log(`Route: ${req.url} Metodo: ${req.method}`)
  next()
})

// esta ruta esta declarada 
// antes del segundo middleware
// se mostrara el contenido de la ruta
// cumpla o no con la condicion
app.get('/about', (req, res) => {
  res.send('about page')  
})

// despues pasa por este middleware
// segundo middleware
app.use((req, res, next) => {
  if (req.query.login === 'admin') {
    next()
  } else {
    res.send('No autorizado')
  }
})

// esta ruta respondera solo
// si el segundo middleware lo autoriza
app.get('/dashboard', (req, res) => {
  res.send('Dashboard page')
})

// esta ruta respondera solo
// si el segundo middleware lo autoriza
app.get('/profile', (req, res) => {
  res.send('Profile page')
})

// Podemos ver que el segundo middleware
// "protege" todas las rutas
// ya que solo se mostrara la respuesta
// si a la ruta se le agrega login=admin

app.listen(3000)
console.log('Server listening on port 3000')