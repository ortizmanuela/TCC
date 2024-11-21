const connection = require('../config/db');

async function deletePerfil(request, response) {
    const { email } = request.body; // Extraindo o email do corpo da requisição

    if (!email) {
        return response.status(400).json({
            success: false,
            message: "Email é necessário para excluir a conta."
        });
    }

    const query = 'DELETE FROM usuarios WHERE email = ?';

    connection.query(query, [email], (err, results) => {
        if (err) {
            console.error("Erro ao executar a query:", err);
            return response.status(500).json({
                success: false,
                message: "Erro ao excluir a conta.",
                error: err.message
            });
        }

        if (results.affectedRows > 0) {
            return response.status(200).json({
                success: true,
                message: "Conta excluída com sucesso!",
                data: results
            });
        } else {
            return response.status(404).json({
                success: false,
                message: "Usuário não encontrado."
            });
        }
    });
}

module.exports = {
    deletePerfil
};