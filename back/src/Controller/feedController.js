const pool = require('../config/db');

// Função para armazenar um post no banco de dados
async function storeFeed(request, response) {


    const params = [
        request.body.titulo,
        request.body.legenda
    ]

    console.log(params);

    const query = "INSERT INTO posts(titulo, legenda) VALUES(?, ?)";

    
    try {
        pool.query(query, params, (err, results) => {
            if(results){
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Sucesso ao cadastrar",
                        data: results
                    })
            }


        })
        
    } catch (err) {
        return response.status(400).json({
            success: false,
            message: "Erro ao inserir o post",
            error: err.message || err, // para capturar a mensagem detalhada
            sql: err,
        });
    }
}

// Função para buscar posts no banco de dados
async function getPost(request, response) {
    const query = "SELECT * FROM posts";

    try {
        pool.query(query, (err, results) => {

            return response.status(200).json({
                success: true,
                message: "Posts retornados com sucesso!",
                data: results,
            });

        })

    } catch (err) {
        return response.status(500).json({
            success: false,
            message: "Erro ao buscar os posts",
            error: err,
            error: err.message || err, // para capturar a mensagem detalhada
        });
    }
}

module.exports = {
    storeFeed,
    getPost
};
