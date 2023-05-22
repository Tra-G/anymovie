let search = document.querySelector('.search-btn');
let searchIcon = document.querySelector('.sm-search');
function showSearch() {
  search.style.display = 'block';
  searchIcon.style.display = 'none';
}

searchIcon.onclick = showSearch;




//Set API endpoint URL
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=068f0f7197e9637e1ff61c5fdffa4c95&page=50';

const container = document.querySelector('.movie');

 //Fetch data from API and parse JSON response
fetch(url)
  .then(response => response.json())
  .then(data => {
    
    // Loop through the results and create HTML for each movie
    data.results.forEach(movie => {
      const numberOfMovies = data.results.length;
      console.log(`Got ${numberOfMovies} movies from the API`);

      for (let i = 0; i < 50; i++) {
        
      }
      const container = `
      <div class="moviecard">          
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
        <h2>${movie.original_title}</h2>
        <div class="rate">
          <p class="year">${movie.release_date}</p>
          <p>${movie.vote_average}</p>
        </div>
      </div>
      `;

      // Add the movie HTML to the container element     
      document.querySelector('.movie').innerHTML += container;
      //container.innerHTML += html;
      console.log(data)
    });
  })
  .catch(error => console.error(error));
