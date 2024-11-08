const {Router} = require ('express');
const {storeFeed, getPost} = require('../Controller/feedController');
const router = Router();

/**
 * @swagger
 * /store/feed:
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
router.post('/store/feed', storeFeed);

/**
 * @swagger
 * /getposts:
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
router.get('/getposts', getPost);

module.exports = router