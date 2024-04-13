// usando el metodo router de express
// es util usar este metodo para
// poder dividir la aplicacion
// y tener nuestras rutas en archivos

const express = require('express')

const router = express.Router()

router.all('/about', (req, res) => {
  res.send('about') 
})

router.get('/dashboard', (req, res) => {
  res.send('dashboard') 
})

module.exports = router