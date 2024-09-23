const icone_arquivo = document.getElementById('icone_arquivo');
const input_file = document.getElementById('input_file');

// Adiciona um evento de clique ao botão
icone_arquivo.addEventListener('click', () => {
    // Simula um clique no input file escondido
    input_file.click();
});