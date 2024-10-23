// Seleciona o botão de envio pelo ID "enviar"
let button = document.getElementById("enviar");

// Define uma função assíncrona que será executada quando o botão for clicado
button.onclick = async function () {
    // Captura os valores dos campos de e-mail e senha usando getElementById
    let email = document.getElementById("e-mail").value;
    let senha = document.getElementById("senha").value;

    // Cria um objeto com os dados de e-mail e senha capturados
    let data = { email, senha };

    // Envia uma requisição POST assíncrona para o servidor, contendo os dados do login
    const response = await fetch('http://localhost:3008/api/login', { // Certifique-se de que a porta seja a mesma utilizada pelo servidor
        method: 'POST', // Especifica que o método HTTP é POST
        headers: { 'Content-Type': 'application/json' }, // Define o cabeçalho para indicar que o corpo da requisição é JSON
        body: JSON.stringify(data) // Converte o objeto de dados para uma string JSON antes de enviá-lo
    });

    // Converte a resposta do servidor para JSON
    const result = await response.json();
    console.log(result);

    // Verifica se a resposta do servidor indica sucesso no login
    if (result.success) {
        if(email === '' || senha === '') {
            alert('preencha os campos!!');
        } else {
            alert('Logado com sucesso'); // Mostra uma mensagem de sucesso ao usuário
            window.location.href = ("../Home/home.html"); // Redireciona o usuário para a página de feed
        }
    } else {
        // Mostra uma mensagem de erro caso o login falhe (e-mail ou senha incorretos)
        alert('Seu email ou senha está incorreto. Se ainda não realizou seu cadastro clique no link abaixo');
    }
};
