const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Pool de conexões com suporte a Promises
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
// usar pool para o suporte a Promises, se nao, nao aceita a conexão!
module.exports = pool; 

//Pool serve para em vez de abrir uma nova conexão com o banco cada vez que precisa acessar dados, ele pega uma conexão que já está disponivel