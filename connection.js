const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/pruebaxd';
const db = mongoose.connection;

// Conectar a MongoDB con las opciones adecuadas
mongoose.connect(uri)


db.once('open', _ => {
    console.log('la base de datos esta conectada a: ', uri);
})

db.on('error', err => {
    console.log(err)
}) 