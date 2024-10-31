// Dados fictícios do usuário (substitua com dados reais do backend)
const userData = {
    name: "Maria Silva",
    email: "maria.silva@email.com"
};

// Função para exibir os dados do usuário
function displayUserData() {
    document.getElementById("userName").textContent = userData.name;
    document.getElementById("userEmail").textContent = userData.email;
}

// Função para excluir a conta
function deleteAccount() {
    const confirmation = confirm("Tem certeza que deseja excluir sua conta?");
    if (confirmation) {
        alert("Conta excluída com sucesso!");
        window.location.href = "../Escolha/Escolha.html";
    }
}

// Event listener para o botão de exclusão
document.getElementById("deleteAccountBtn").addEventListener("click", deleteAccount);

// Carregar os dados do usuário ao abrir a página
window.onload = displayUserData;
