const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require('express-fileupload');

dotenv.config();

const feedRouter = require('./routes/feedRouter');
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');
const formularioRouter = require('./routes/formularioRouter');
const solicitaçoesRouter = require('./routes/solicitaçoesRouter');
const perfilRouter = require('./routes/perfilRouter');
const agendaRouter = require('./routes/agendaRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', feedRouter);
app.use('/api', cadastroRouter);
app.use('/api', loginRouter);
app.use('/api', formularioRouter);
app.use('/api', solicitaçoesRouter);
app.use('/api', perfilRouter);
app.use('/api', agendaRouter);

module.exports = app;
  