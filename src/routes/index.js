//rutas del proyecto
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
    console.log('primera ruta accedida')

    const pool = require('../database');
});

module.exports = router;