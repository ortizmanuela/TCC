// Função para buscar o nome do usuário pelo ID
async function getUserNameById(userId) {
  try {
    const response = await fetch(`http://localhost:3100/api/getUserById?id=${userId}`);
    const userData = await response.json();
    return userData.name; // Supondo que o JSON retornado contém { "name": "Nome do Usuário" }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return "Usuário Desconhecido"; // Nome padrão caso ocorra algum erro
  }
}

// Função para buscar posts do servidor e atualizar o conteúdo da página
async function getPosts() {
  try {
    const response = await fetch('http://localhost:3100/api/getposts');
    const result = await response.json();
    const postagem_final = document.getElementById('post-container');

    // Esconde o contêiner se não houver posts
    if (!result.data || result.data.length === 0) {
      postagem_final.style.display = 'none';
      return;
    }

    // Limpa o conteúdo do contêiner antes de adicionar novos posts
    postagem_final.innerHTML = '';
    let hasPosts = false;

    // Itera sobre cada post e cria os elementos HTML para exibir no contêiner
    for (const post of result.data) {
      // Verifica se o post tem título e legenda
      if (!post.titulo || !post.legenda) continue;

      // Obtém o nome do usuário pelo ID
      const userName = await getUserNameById(post.userId); // `post.userId` é o ID do usuário

      hasPosts = true;

      // Cria o cabeçalho do post com imagem e nome do perfil
      const divCabecalho = document.createElement('div');
      const ulCabecalho = document.createElement('ul');
      const pPerfil = document.createElement('p');
      const imgPerfil = document.createElement('img');

      imgPerfil.src = "../../img/icone usuario.svg";
      imgPerfil.className = "icone_usuario";
      pPerfil.className = "perfil";
      pPerfil.innerText = userName; // Insere o nome do usuário

      ulCabecalho.appendChild(imgPerfil);
      ulCabecalho.appendChild(pPerfil);
      divCabecalho.appendChild(ulCabecalho);

      // Cria o corpo do post com título e legenda
      const divPost = document.createElement('div');
      divPost.className = "post";
      const divTextos = document.createElement('div');
      divTextos.className = "textos";
      const h2titulo = document.createElement('h2');
      h2titulo.className = "titulo";
      h2titulo.innerText = post.titulo;
      const pLegenda = document.createElement('p');
      pLegenda.className = "legenda";
      pLegenda.innerText = post.legenda;

      divTextos.appendChild(h2titulo);
      divTextos.appendChild(pLegenda);
      divPost.appendChild(divTextos);

      postagem_final.appendChild(divCabecalho);
      postagem_final.appendChild(divPost);
    }

    postagem_final.style.display = hasPosts ? 'block' : 'none';

  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
}

// Executa a função getPosts() ao carregar a página
document.addEventListener('DOMContentLoaded', getPosts);
