const express = require('express')

const app = express()

// Queries
// usar query y enviar esos datos a la consola
// Ejemplo
// http://localhost:3000/hello/john?user=jesus
// devulve por consola
// { user: 'jesus' }
// http://localhost:3000/hello/john?user=jesus&age=30
// devulve por consola
// { user: 'jesus', age: '30' }
// podemos usar mas de una query en una url
// en la ruta, atravez de & encadenamos querys 

app.get('/hello/:username', (req, res) => {
  console.log(req.query)
  res.send(`Hello ${req.params.username.toUpperCase()}`)
})

// Aplicando logica y queries
// En este caso, si la query es javascript books
// http://localhost:3000/search?q=javascript%20books
// enviara la lista de libros JS
// si no enviara todo ok
// las querys se pueden usar para paginacion
app.get('/search', (req, res) => {
  if (req.query.q === 'javascript books') {
    res.send('lista de libros JS')
  } else {
    res.send('todo ok')
  }
})

app.listen(3000)
console.log('Server listening on port 3000')