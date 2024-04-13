// usando el modulo router de express
// es util usar este modulo para
// poder dividir la aplicacion
// y tener nuestras rutas en archivos

// en user usamos el modulo router
// otra forma de usar el modulo
// mas sencilla es
// como Router es una parte del objeto
// exportado por el modulo express
// puedo desestructurar el objeto exportado
// quedando de esta forma: 

const { Router } = require('express')

const router = Router()

router.all('/about', (req, res) => {
  res.send('about') 
})

router.get('/dashboard', (req, res) => {
  res.send('dashboard') 
})

module.exports = router