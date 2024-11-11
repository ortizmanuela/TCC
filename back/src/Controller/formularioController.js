const connection = require('../config/db');

async function storeFormulario(request, response) {
    const params = [
        request.body.nome,
        request.body.email,
        request.body.numero_telefone,
        request.body.observacoes
    ]
    const query = 'INSERT INTO formulario (nome, email, numero_telefone, observacoes) VALUES (?, ?, ?, ?)';

    connection.query(query, params, (err, results) => {
        if(results){
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
            }else{
                response
                    .status(400)
                    .json({
                        sucess: false,
                        message: erro,
                        data: err
                    })
        }
    })
}
module.exports = {

    storeFormulario
}

    