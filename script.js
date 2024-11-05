// Função para buscar filmes e séries
function searchMovies() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let movieList = document.getElementById("movieList");
    let movies = movieList.getElementsByClassName("movie-item");

    // Loop pelos filmes e séries
    for (let i = 0; i < movies.length; i++) {
        let title = movies[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (title.includes(input)) {
            movies[i].style.display = ""; // Exibe o item que corresponde à busca
        } else {
            movies[i].style.display = "none"; // Oculta o item que não corresponde
        }
    }
}
