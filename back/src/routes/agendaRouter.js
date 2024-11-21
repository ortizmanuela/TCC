const { Router } = require('express');
const { postagendamento, getagendamento } = require('../Controller/agendaController');
const router = Router();

/**
 * @swagger
 * /api/postagendamento:
 *  post:
 *    summary: Agenda uma nova consulta
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nome_paciente:
 *                type: string
 *                description: Nome do paciente
 *              horario_consulta:
 *                type: string
 *                format: time
 *                description: Horário da consulta no formato HH:MM
 *              observacoes:
 *                type: string
 *                description: Observações adicionais
 *              dia:
 *                type: integer
 *              mes:
 *                type: integer
 *              ano:
 *                type: integer
 *    responses:
 *      201:
 *        description: Consulta agendada com sucesso
 *      500:
 *        description: Erro ao salvar no banco de dados
 */
router.post('/postagendamento', postagendamento);

/**
 * @swagger
 * /api/getagendamento:
 *  get:
 *    summary: Obtém todas as consultas agendadas
 *    responses:
 *      200:
 *        description: Lista de consultas agendadas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: integer
 *                    description: ID único da consulta
 *                  nome_paciente:
 *                    type: string
 *                    description: Nome do paciente
 *                  horario_consulta:
 *                    type: string
 *                    format: time
 *                    description: Horário da consulta no formato HH:MM
 *                  observacoes:
 *                    type: string
 *                    description: Observações adicionais
 *                  dia:
 *                    type: integer
 *                    description: Dia da consulta
 *                  mes:
 *                    type: integer
 *                    description: Mês da consulta
 *                  ano:
 *                    type: integer
 *                    description: Ano da consulta
 *      500:
 *        description: Erro ao buscar as consultas
 */
router.get('/getagendamento', getagendamento);


module.exports = router;
