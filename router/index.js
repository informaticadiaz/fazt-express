const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const HomeRoutes = require('./home')
const UserRoutes = require('./users')

// settings
app.set('case sensitive routing', true)
app.set('appName', 'Express Course')
app.set('port', 3000)

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use(HomeRoutes)
app.use(UserRoutes)

app.listen(app.get('port'))

