require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const passport = require('passport')


require('./models/db')
require('./config/passport')

const app = express()
const port = 3001

app.use(passport.initialize())


app.use(bodyParser.json({ type: 'application/*+json' }))


apiRouter = require('./routes')
app.use('/api', apiRouter)  



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




