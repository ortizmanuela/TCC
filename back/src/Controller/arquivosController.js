const connection = require('../config/db')
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');
const uploadPath = path.join(__dirname, '..', 'uploads')

if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

async function storeArquivos(request, response) {

    if (!request.files) {
        return response.status(400).json({
            success: false,
            message: "Você não enviou o arquivo."
        });
    }

    const arquivos = request.files.nova_pasta;
    const arquivosNome = Date.now() + path.extname(arquivos.name);

    arquivos.mv(path.join(uploadPath, arquivosNome), (erro) => {
        if (erro) {
            return response.status(400).json({
                success: false,
                message: "Erro ao mover o arquivo."
            });
        }
    });

    return response.status(200).json({
        success: true,
        message: "Arquivo movido com sucesso."
    });

    const params = Array(
        request.body.nova_pasta,
        arquivosNome
    )

    const query = "INSERT INTO arquivos(nova_pasta, arquivos) VALUE(?, ?)";

    connection.query(query,params, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err,
            })
        }
    })
};
