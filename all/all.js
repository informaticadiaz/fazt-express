const express = require('express')

const app = express()

// all hace que la ruta
// funcione con todos los metodos
// cuando usamos alll
// podemos usar get, post, put, patch y delete
app.all('/info', (req, res) => {
  res.send('server info')  
})

app.listen(3000)
console.log('Server listening on port 3000')