const express = require('express');
const dotenv = require('dotenv');
const feedRouter = require('./routes/feedRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');
const formularioRouter = require('./routes/formularioRouter');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const pool = require('./config/db');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Adicione as rotas
app.use('/api', feedRouter);
app.use('/api', cadastroRouter);
app.use('/api', loginRouter);
app.use('/api', formularioRouter);

module.exports = app;
