const {Router} = require('express');
const {deletePerfil} = require('../Controller/perfilController');
const router = Router();

/**
 * @swagger
 * /deleteperfil:
 *  delete:
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
router.delete('/deleteperfil', deletePerfil);

module.exports = router;