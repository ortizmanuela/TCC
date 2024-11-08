const express = require('express');
const dotenv = require('dotenv');
const feedRouter = require('./routes/feedRouter');  // Testando apenas esta rota por enquanto
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const pool = require('./config/db'); // Pool de conexões MySQL2

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Teste apenas com o feedRouter
app.use('/api', feedRouter);
app.use('/api', cadastroRouter);
app.use('/api', loginRouter);



module.exports = app;
