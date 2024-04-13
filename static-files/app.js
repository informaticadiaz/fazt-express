const express = require('express')
const morgan = require('morgan')
// modulo llamado path
// el modulo path nos permite concatenar directorios
// cuando trabajamos con node
// tenemos una constante llamada
// __dirname que nos dice la ruta del directorio actual
const path = require('path')

const app = express()

// este middleware se utiliza para
// sirve para express pueda
// reconocer el formato json
// que se encuentra dentro del body de la peticion
app.use(express.json())
// este middleware se utiliza para 
// configurar un middleware
app.use(morgan('dev'))
// este middleware es para servir archivos estaticos
// viene incorporado en express
// todo lo que se encuentre dentro
// de la carpeta public sera servido
app.use(express.static('./public'))

// podemos configurar los archivos estaticos
// para que pueden ser servidos desde una ruta
// por ejemplo podemos decir que los archivos estaticos
// sean servidos desde la ruta /public
// podria ser otro nombre o ruta
// por lo general esta configuracion
// se encuntra al final del archivo
// la constatnte de node llamada __dirname
// nos dice la ruta del directorio actual
// con el metodo de node path.join
// podemos concatenar una serie de rutas
// esto es util y se usa por lo general en produccion
app.use('/public', express.static(path.join(__dirname, './public')))
// podemos configurar varias rutas de archivos estaticos
app.use('/videos', express.static('./videos'))
app.use('/imagenes', express.static('./imagenes'))

// podemos servir contenido estatico con express


const PORT = 3000

app.get('/', (req, res) => {

})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})