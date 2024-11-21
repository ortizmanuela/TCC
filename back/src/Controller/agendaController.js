const pool = require('../config/db');

// Função para armazenar um post no banco de dados
async function postagendamento(request, response) {
    const params = [
        request.body.nome_paciente,
        request.body.horario_consulta,
        request.body.observacoes,
        request.body.dia,
        request.body.mes,
        request.body.ano
    ];

    console.log("Parametros recebidos:", params);

    const query = "INSERT INTO consultas(nome_paciente, horario_consulta, observacoes, dia, mes, ano) VALUES(?, ?, ?, ?, ?, ?)";

    pool.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query:", err);
            return response.status(500).json({
                success: false,
                message: "Erro ao salvar no banco de dados.",
                error: err.message
            });
        }

        return response.status(201).json({
            success: true,
            message: "Consulta agendada com sucesso.",
            data: results
        });
    });
}

// Função para buscar todas as consultas no banco de dados
async function getagendamento(request, response) {
    const query = "SELECT * FROM consultas ORDER BY nome_paciente, horario_consulta, observacoes, dia, mes, ano";

    pool.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao executar a query:", err);
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar as consultas.",
                error: err.message
            });
        }

        return response.status(200).json({
            success: true,
            message: "Consultas obtidas com sucesso.",
            data: results
        });
    });
}

module.exports = {
    postagendamento,
    getagendamento
};
