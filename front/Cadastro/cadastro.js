// Seleciona o botão de envio pelo ID "enviar"
let button = document.getElementById("enviar");

// Define uma função assíncrona que será executada quando o botão for clicado
button.onclick = async function(e) {
    e.preventDefault(); // Previne o comportamento padrão do botão de envio, que seria recarregar a página

    // Captura o valor dos campos do formulário, utilizando querySelector para acessar os elementos
    let nome_completo = document.getElementById('nome_completo').value;
    let email = document.getElementById('email').value; 
    let senha = document.getElementById('senha').value; 
    let confirmar_senha = document.getElementById('confirmar_senha').value;

    // Cria um objeto com os dados capturados
    let data = { nome_completo, email, senha, confirmar_senha }; 

    // Exibe os dados capturados no console, para fins de depuração
    console.log("Dados que serão enviados:", data); 

    try {
        // Envia uma requisição POST assíncrona para o servidor, contendo os dados do formulário
        const response = await fetch('http://localhost:3008/api/store/user', {
            method: "POST", // Especifica o método HTTP como POST
            headers: { "Content-Type": "application/json;charset=UTF-8" }, // Define o tipo de conteúdo como JSON
            body: JSON.stringify(data) // Converte o objeto de dados para uma string JSON
        });

        // Verifica se a resposta do servidor não é bem-sucedida
        if (!response.ok) {
            // Se a resposta não for OK, lança um erro com a mensagem de status da resposta
            throw new Error(`Erro na requisição: ${response.statusText}`); 
        }

        // Converte a resposta do servidor para JSON
        let content = await response.json();
        console.log(content)

        // Verifica se a resposta contém uma chave "success" indicando sucesso
        if (content.success) {
            alert("Sucesso");
            window.location.href = ("../Login/login.html"); // Redireciona o usuário para a página de login
            // Mostra um alerta de sucesso para o usuário
        } else {
            // Mostra um alerta de erro caso algo tenha dado errado no cadastro
            alert("Erro ao cadastrar. Verifique os dados inseridos ou se você já possui uma conta com esse e-mail."); 
        }

    } catch (error) {
        // Captura e exibe qualquer erro que ocorra durante o envio da requisição
        console.error("Erro ao enviar a requisição:", error); 
        alert("Erro ao enviar a requisição."); // Mostra um alerta de erro genérico para o usuário
    }
};
