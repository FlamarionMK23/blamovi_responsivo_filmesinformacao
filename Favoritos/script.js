const apiKey = '7bb8ce6d-3296-4 c40-9c80-dc839b516b7a';

// Função para fazer a requisição à API e obter os dados dos filmes
function fetchMovies() {
  const url = `http://www.omdbapi.com/?i=tt38 96198&apikey=79a155de`; // Exemplo de busca pelos filmes "Avengers"
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const movieCardsContainer = document.querySelector('.movie-cards');

      if (data.Response === 'True') {
        data.Search.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
          // Defina o conteúdo do card do filme aqui (título, imagem, descrição, etc.)
          movieCardsContainer.appendChild(movieCard);
        });
      } else {
        console.log('Erro ao obter os dados dos filmes');
      }
    })
    .catch(error => {
      console.log('Erro ao obter os dados da API', error);
    });
}

// Event listener para chamar a função fetchMovies quando a página carregar
window.addEventListener('load', fetchMovies);
