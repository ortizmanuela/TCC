document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("enviar");

    button.onclick = async function (e) {
        e.preventDefault();

        let nome_completo = document.getElementById('nome_completo').value.trim();
        let email = document.getElementById('email').value.trim();
        let senha = document.getElementById('senha').value.trim();
        let confirmar_senha = document.getElementById('confirmar_senha').value.trim();

        if (!nome_completo || !email || !senha || !confirmar_senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confirmar_senha) {
            alert("As senhas não coincidem.");
            document.getElementById('senha').style.borderColor = "red";
            document.getElementById('confirmar_senha').style.borderColor = "red";
            return;
        } else {
            document.getElementById('senha').style.borderColor = "";
            document.getElementById('confirmar_senha').style.borderColor = "";
        }

        try {
            let data = { nome_completo, email, senha };
            console.log("Dados que serão enviados:", data);

            const response = await fetch('http://localhost:3100/api/store/user', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            console.log("Status da resposta:", response.status);
            console.log("Headers da resposta:", response.headers);

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            const content = await response.json();
            console.log("Resposta do servidor:", content);

            if (content.success) {
                alert("Dados enviados com sucesso! Cadastro realizado.");
                window.location.href = "../Login/Login.html";
            } else {
                alert("Erro ao cadastrar. Verifique os dados ou se já possui conta.");
            }
        } catch (error) {
            console.error("Erro ao enviar a requisição:", error);
            alert(`Erro ao enviar a requisição: ${error.message}`);
        }
    };
});
