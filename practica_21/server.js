const mongoose = require('mongoose');
const express = require('express');
const personsRoutes = require('./routes/persons');

mongoose.Promise = global.Promise;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personsRoutes);

mongoose.connect(
    `mongodb+srv://Pruebas:prueba1234@practica-17.wa4gl.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("conected successfully");
});

app.listen(3000);