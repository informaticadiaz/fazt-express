// usando el modulo router de express
// es util usar este modulo para
// poder dividir la aplicacion
// y tener nuestras rutas en archivos

const express = require('express')

const router = express.Router()

router.get('/users', (req, res) => {
  res.send('users')
})

router.post('/profile', (req, res) => {
 res.send('profile') 
})

module.exports = router