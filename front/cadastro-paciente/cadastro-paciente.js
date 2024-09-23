let button = document.getElementById("enviar");

button.onclick = async function(e) {
    e.preventDefault(); 

    let nome_completo = document.querySelector('.inputs .input_campo #nome_completo').value;
    let email = document.querySelector('.inputs .input_campo #e-mail').value; 
    let senha = document.querySelector('.inputs .input_campo #senha').value; 
    let confirmar_senha = document.querySelector('.inputs .input_campo #confirmar_senha').value;  

    let data = { nome_completo, email, senha, confirmar_senha }; 

    console.log("Dados que serão enviados:", data); 

    try {
        const response = await fetch('http://localhost:3008/api/store/user', {
            method: "POST", 
            headers: { "Content-Type": "application/json;charset=UTF-8" }, 
            body: JSON.stringify(data) 
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`); 
        }

        let content = await response.json(); 

        if (content.success) {
            alert("Sucesso"); 
        } else {
            alert("Erro ao cadastrar. Vefique os dados inseridos ou se você já possui uma conta."); 
        }

    } catch (error) {
        console.error("Erro ao enviar a requisição:", error); 
        alert("Erro ao enviar a requisição."); 
    }
};