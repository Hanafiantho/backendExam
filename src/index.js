const express = require('express')
const port = 9000
const movieRouter = require('./routers/movieRouter')
const categoriesRouter = require('./routers/categoriesRouter')

const app = express()
app.use(express.json())
app.use(movieRouter)
app.use(categoriesRouter)

app.listen(port, () => {
    console.log('App running on port ' + port)
})