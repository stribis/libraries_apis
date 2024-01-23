const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results-container");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    searchMovies(searchTerm);
  }
});

function searchMovies(title) {
  const apiKey = "YOUR_OMDB_API_KEY"; // Replace with your own OMDB API key
  const apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.Search) {
        displayResults(data.Search);
      } else {
        resultsContainer.innerHTML = "No movies found.";
      }
    })
    .catch(error => console.error("Error fetching data: " + error));
}

function displayResults(movies) {
  resultsContainer.innerHTML = "";
  movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const poster = document.createElement("img");
    poster.classList.add("movie-poster");
    poster.src = movie.Poster === "N/A" ? "no-poster.jpg" : movie.Poster;

    const title = document.createElement("h3");
    title.textContent = movie.Title;

    const year = document.createElement("p");
    year.textContent = `Year: ${movie.Year}`;

    movieCard.appendChild(poster);
    movieCard.appendChild(title);
    movieCard.appendChild(year);

    resultsContainer.appendChild(movieCard);
  });
}
