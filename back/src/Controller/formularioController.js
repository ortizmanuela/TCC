const connection = require('../config/db');

async function storeFormulario(request, response) {
    const params = [
        request.body.nome,
        request.body.email,
        request.body.telefone,
        request.body.observacoes
    ];

    console.log(params)
    const query = 'INSERT INTO formulario (nome, email, numero_telefone, observaçoes) VALUES (?, ?, ?, ?)';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        } else {
            response
                .status(500)
                .json({
                    success: false,
                    message: err.message,
                    data: err
                });
        }
    });
}

module.exports = {
    storeFormulario
};
