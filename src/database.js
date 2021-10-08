const mysql = require('mysql');
const { promisify } = require('util');


const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err , connection) => {
    if (err) {
        if (err === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed');
        }
        if (err === 'ER_CON_COUNT_ERROR') {
            console.error('Database has to many connections');
        }
        if (err === 'ECONNREFUSED') {
            console.error('Database connection was refused');            
        }
    }
    if (connection) {
        connection.release();
    }
    console.log('Database is connected');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;