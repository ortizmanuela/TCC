// Seleciona o botão de envio pelo ID "enviar"
let button = document.getElementById("enviar");

// Define uma função assíncrona que será executada quando o botão for clicado
button.onclick = async function (e) {
    e.preventDefault(); // Previne o comportamento padrão do botão de envio

    // Captura o valor dos campos do formulário
    let nome_completo = document.getElementById('nome_completo').value.trim();
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value.trim();
    let confirmar_senha = document.getElementById('confirmar_senha').value.trim();

    // Validação de campos
    if (!nome_completo || !email || !senha || !confirmar_senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verificação de senha
    if (senha !== confirmar_senha) {
        alert("As senhas não coincidem.");

        // Adiciona um estilo visual aos campos de senha para indicar erro
        document.getElementById('senha').style.borderColor = "red";
        document.getElementById('confirmar_senha').style.borderColor = "red";

        return;
    } else {
        // Remove o estilo de erro caso as senhas coincidam
        document.getElementById('senha').style.borderColor = "";
        document.getElementById('confirmar_senha').style.borderColor = "";
    }

    // Cria um objeto com os dados capturados
    let data = { nome_completo, email, senha };

    console.log("Dados que serão enviados:", data);

    try {
        // Envia uma requisição POST para o servidor
        const response = await fetch('http://localhost:3100/api/store/user', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        // Converte a resposta para JSON
        const content = await response.json();
        console.log("Resposta do servidor:", content);

        // Verifica se o cadastro foi bem-sucedido
        if (content.success) {
            alert("Dados enviados com sucesso! Cadastro realizado.");
            window.location.href = "../Login/login.html";
        } else {
            alert("Erro ao cadastrar. Verifique os dados ou se já possui conta.");
        }

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
        alert(`Erro ao enviar a requisição: ${error.message}`);
    }
};
