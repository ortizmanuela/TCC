const { Router } = require('express');
const router = Router();
const { login } = require('../Controller/loginController');

/**
 * @swagger
 * /login:
 *  post:
 *      summary: Mostra na tela
 *      responses:
 *        201:
 *          descripition: Sucesso
 *          content:
 *              aplication/json:
 *                 schema:
 *                    type: array
 *                    items:
 *                       type: object
 */
router.post('/login', login);

module.exports = router