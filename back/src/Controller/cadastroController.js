const connection = require('../config/db.js');
const dotenv = require('dotenv').config();

async function storeUser(request, response) {
    const params = Array(
        request.body.nome_completo,
        request.body.email,
        request.body.senha
    );
    
    const query = "INSERT INTO usuarios(nome, email, senha) VALUES (?, ?, ?)";
    console.log(params)
    connection.query(query, params, (err, results) => {
        if (results) {
            response 
                .status(200)
                .json({
                    success: true,
                    massage: "Sucesso!",
                    data: results
                })
            
        } else {
            
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema :(",
                    data: err
                })
        }
    })
}

module.exports = {
    storeUser
}