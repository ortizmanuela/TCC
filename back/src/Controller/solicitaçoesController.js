const pool = require('../config/db');

//Função para buscar posts no banco de dados
async function getPost(request,response) {
    const query = "SELECT * FROM formulario";

    try {
        pool.query(query, (err, results) => {

            return response.status(200).json({
                success: true,
                message: "Posts retornados com sucesso",
                data: results,
            });
        })
    } catch (err) {
        return response.status(500).json({
            success: false,
            message: "Erro ao buscar os posts",
            error: err,
            error: err.message
        });
    }
}

module.exports = {
    getPost
};