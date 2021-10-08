const express = require('express');
const morgan = require('morgan');

// inicializaciones
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));

// variables globales

// rutas
app.use(require('./routes'));

// public

// starting de server
app.listen(app.get('port'), () => {
    console.log('Server port', app.get('port'));
});