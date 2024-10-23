// // // Para exibir e ocultar os dados //
// document.addEventListener('DOMContentLoaded', function () {
//     const adicionar = document.getElementById('adicionar');
//     const botoes = document.getElementById('botoes');

//     adicionar.addEventListener('mouseover', function() {
//         botoes.style.display = 'block';
//     });

//     adicionar.addEventListener('mouseout', function() {
//         botoes.style.display = 'none';
//     });

//     botoes.addEventListener('mouseover', function() {
//         botoes.style.display = 'block';
//     });

//     botoes.addEventListener('mouseout', function() {
//         botoes.style.display = 'none';
//     });
// });


// //Upload de arquivos//

// let button = document,getElementById("Enviar")//enviar não existe eu coloco oq//

// button.onclick = async function() {
//     let form = document.getElementById("formulario");
//     let dadosForm = new FormData(form); //Agrupar dados de um formulário//

//     const response = await fetch('http://localhost:3008/ap'), {//como faço para ajustar esse link//
//         method: "POST",
//         body: dadosForm
//     })

//     let content
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('uploadForm');
    
//     form.addEventListener('submit', async function(event) {
//         event.preventDefault();

//         const formData = new FormData(form);

//         try {
//             const response = await fetch('/upload', {
//                 method: 'POST',
//                 body: formData
//             });

//             const result = await response.json();

//             if (result.success) {
//                 alert('Arquivo movido com sucesso!');
//             } else {
//                 alert('Erro: ' + result.message);
//             }
//         } catch (error) {
//             console.error('Erro ao enviar o arquivo:', error);
//             alert('Erro ao enviar o arquivo.');
//         }
//     });
// });
