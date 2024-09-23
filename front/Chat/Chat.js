// // Adiciona um ouvinte de evento ao formulário de chat para capturar o evento de envio
// document.getElementById('chat-form').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Impede o comportamento padrão do formulário, que é recarregar a página

//     const messageInput = document.getElementById('message-input'); // Obtém o campo de entrada de mensagem
//     const messageText = messageInput.value; // Captura o texto digitado pelo usuário

//     try {
//         // Envia a mensagem para o servidor utilizando a API Fetch
//         const response = await fetch('/send-message', {
//             method: 'POST', // Método HTTP utilizado para enviar dados ao servidor
//             headers: {
//                 'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
//             },
//             body: JSON.stringify({ message: messageText }) // Converte a mensagem para JSON antes de enviar
//         });

//         // Limpa o campo de entrada de mensagem após o envio
//         messageInput.value = '';

//         // Chama a função para carregar as mensagens atualizadas do servidor
//         loadMessages();
//     } catch (error) {
//         console.error('Erro ao enviar mensagem:', error); // Loga qualquer erro ocorrido durante o envio
//     }
// });

// // Função para carregar as mensagens do servidor
// async function loadMessages() {
//     try {
//         // Faz uma requisição ao servidor para obter todas as mensagens
//         const response = await fetch('/get-messages');
//         const messages = await response.json(); // Converte a resposta do servidor para JSON

//         const messagesContainer = document.getElementById('messages'); // Obtém o container onde as mensagens serão exibidas
//         messagesContainer.innerHTML = ''; // Limpa o container antes de adicionar as mensagens

//         // Itera sobre as mensagens recebidas e as exibe no container
//         messages.forEach(message => {
//             const messageElement = document.createElement('div'); // Cria um elemento <div> para cada mensagem
//             messageElement.textContent = message.text; // Define o conteúdo da mensagem
//             messagesContainer.appendChild(messageElement); // Adiciona a mensagem ao container
//         });
//     } catch (error) {
//         console.error('Erro ao carregar mensagens:', error); // Loga qualquer erro ocorrido durante o carregamento das mensagens
//     }
// }

// // Carrega as mensagens ao iniciar a página
// loadMessages();
