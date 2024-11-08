const connection = require('../config/db.js');

async function login(request, response) {
    const { email, senha } = request.body;

    const query = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";  // verifica se tem no banco

    connection.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao fazer login:', err);
            response.status(500).json({
                success: false,
                message: "Erro ao fazer login",
                data: err
            });
        } else if (results.length > 0) {
            response.status(200).json({
                success: true,
                message: "Login bem-sucedido",
                data: results[0]
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Email ou senha incorretos",
                data: err
            });
        }
    });
}

module.exports = { 
    login 
};
