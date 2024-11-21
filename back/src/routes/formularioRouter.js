const express = require('express');
const pool = require('../config/db'); 
const router = express.Router();
const {storeFormulario} = require('../Controller/formularioController');
/**
 * @swagger
 * /enviarformulario:
 *   post:
 *     summary: Cria um novo formulário
 *     description: Recebe dados do formulário do paciente e os insere no banco de dados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               numero_telefone:
 *                 type: string
 *               observacoes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Formulário salvo com sucesso
 *       500:
 *         description: Erro ao salvar o formulário
 */
router.post('/enviarFormulario', storeFormulario);

module.exports = router;
