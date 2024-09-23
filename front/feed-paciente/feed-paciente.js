//Esperar a página carregar//
//Buscar ports do servidor//
//Ler a resposta do servidor//
//Mostrar os dados no console//
// document.addEventListener('DOMContentLoaded', async () => {
//     const response = await fetch('http://localhost:3008/api/get/getposts');
//     const result = await response.json();
  
//     console.log(result);
//   }); 

async function getPosts() {
  const response = await fetch('http://localhost:3008/api/get/getposts');
  const result = await response.json();
  const postagem_final = document.getElementById('post-container');
    result.data.forEach(post => {
      const divCabecalho = document.createElement('div')
      const ulCabecalho = document.createElement('ul')
      const pPerfil = document.createElement('p')
      const imgPerfil = document.createElement('img')
      imgPerfil.src = "../../img/icone usuario.svg"
      imgPerfil.className = "icone_usuario"
      pPerfil.className = "perfil"
      pPerfil.innerText = post.nome;
      
      ulCabecalho.appendChild(imgPerfil)
      ulCabecalho.appendChild(pPerfil)

      divCabecalho.appendChild(ulCabecalho)

      postagem_final.appendChild(divCabecalho)


      const divPost = document.createElement('div')
      divPost.className = "post"
      const divTextos = document.createElement('div')
      divTextos.className = "textos"
      const h2titulo = document.createElement('h2')
      h2titulo.className = "titulo"
      h2titulo.innerText = post.titulo
      const pLegenda = document.createElement('p')
      pLegenda.className = "legenda"
      pLegenda.innerText = post.legenda

      divTextos.appendChild(h2titulo)
      divTextos.appendChild(pLegenda)

      divPost.appendChild(divTextos)

      postagem_final.appendChild(divPost)
      // postagem_final.appendChild(card)
     })
};
getPosts();



// Espera a página carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', async () => {
  // Faz uma requisição HTTP GET para buscar os posts do servidor
  const response = await fetch('http://localhost:3008/api/get/getposts');
  const result = await response.json(); // Converte a resposta para JSON

  // Seleciona o contêiner onde os posts serão exibidos
  const postContainer = document.getElementById('post-container');
});
