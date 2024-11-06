// Função para buscar os dados do usuário na API
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/usuario/${userId}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Erro ao buscar dados do usuário');
        }
    } catch (error) {
        console.error(error);
    }
}

// Função para exibir os dados do usuário
async function displayUserData() {
    const userId = 1; // Substitua pelo ID real do usuário
    const userData = await fetchUserData(userId);

    if (userData) {
        document.getElementById("userName").textContent = userData.nome;
        document.getElementById("userEmail").textContent = userData.email;
    }
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
