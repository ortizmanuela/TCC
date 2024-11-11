// routes/formularioRouter.js
const express = require('express');
const pool = require('../config/db'); // Pool de conexões MySQL2
const router = express.Router();

/**
 * @swagger
 * /api/formulario:
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
router.post('/formulario', async (req, res) => {
    const { nome, email, numero_telefone, observacoes } = req.body;

    try {
        const query = 'INSERT INTO formulario (nome, email, numero_telefone, observacoes) VALUES (?, ?, ?, ?)';
        const [result] = await pool.query(query, [nome, email, numero_telefone, observacoes]);
        
        res.status(200).json({ success: true, message: 'Dados do formulário enviado com sucesso!', id: result.insertId });
    } catch (error) {
        (console.error("Erro ao salvar o formulário:", error));
        res.status(500).json({ success: false, message: 'Erro ao enviar os dados do formulário' });
    }
});

module.exports = router;
