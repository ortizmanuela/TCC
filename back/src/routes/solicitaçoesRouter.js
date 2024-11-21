const {Router} = require ('express');
const {getPost} = require('../Controller/solicitaçoesController');
const router = Router();

/**
 * @swagger
 * /getsolicitacoes:
 *  get:
 *      summary: Retorna um post
 *      responses:
 *        200:
 *          description: Postagem
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 */
router.get('/getsolicitacoes', getPost);

module.exports = router;