const {Router} = require('express')
const router = Router();

const { storeUser } = require('../Controller/cadastroController');

/**
 * @swagger
 * /store/user:
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
router.post('/store/user', storeUser);

module.exports = router;


// rota do cadastro, e chamando o express e controller