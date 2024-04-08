// rest api crud
// importo express
const express = require('express')
// importo morgan
const morgan = require('morgan')

const now = new Date();
// Formatear la fecha y hora en formato de cadena legible
const formatedTime = now.toLocaleTimeString();



const app = express()
let products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100
  },
]

// middlewares
// app usa el middleware morgan
app.use(morgan('dev'))
// app usa el middleware express.json
app.use(express.json())

app.all('/', (req, res) => {
  res.send('Hola Jhon')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.post('/products', (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 }
  products.push(newProduct)
  res.send(newProduct)
})

app.put('/products/:id', (req, res) => {
  const newData = req.body
  // busca si el producto existe
  const productFound = products.find(
    (p) => p.id === parseInt(req.params.id)
  )

  // si el producto no existe, devuelve un error
  if (!productFound) {
    return res
      .status(404)
      .json({ message: 'Product not found' })
  }
  // actualiza el producto
  const newProducts = products.map(p => p.id === parseInt(req.params.id) ? { ...p, ...newData } : p)

  console.log('Time:', formatedTime);
  console.log(newProducts)
  res.json({
    message: 'Product updated',
  })
})

app.delete('/products/:id', (req, res) => {
  // busca si el producto existe
  const productFound = products.find(
    (p) => p.id === parseInt(req.params.id)
  )

  // si el producto no existe, devuelve un error
  if (!productFound) {
    return res
      .status(404)
      .json({ message: 'Product not found' })
  }

  // elimina el producto 
  products = products.filter((p => p.id !== productFound.id))
  // Imprimir la fecha y hora formateadas en la consola
  console.log('Time:', formatedTime);

  res.send(204)

})

app.get('/products/:id', (req, res) => {
  const productFound = products.find(
    (p) => p.id === parseInt(req.params.id)
  )

  if (!productFound) {
    return res
      .status(404)
      .json({ message: 'Product not found' })
  }
  // Imprimir la fecha y hora formateadas en la consola
  console.log('Time:', formatedTime);

  res.json(productFound)
})




app.listen(3000)
console.log('Server listening on port 3000')