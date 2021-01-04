const mongoose = require('mongoose')
const connectString = 'mongodb+srv://illia:mostSecurePassword@cluster0.agd5i.mongodb.net/quiz-maker?retryWrites=true&w=majority'
mongoose.connect(connectString, {useNewUrlParser: true});
require('./user')

mongoose.connection.on('connected', () => {
    console.log('mongodb connected')
}, { useUnifiedTopology: true })

mongoose.connection.on('error', (e) => {
    console.log('mongodb connected error: ' + e)
}, { useUnifiedTopology: true })

mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected')
}, { useUnifiedTopology: true })