//The search bar
let searchBar = document.querySelector('.search-bar');
let searchBtn = document.querySelector('.searchBtn');

function showSearch() {
  searchBar.style.display = 'flex';
  searchBtn.style.display = 'none';
}

searchBtn.onclick = showSearch;


/*Side bar hamburger */
let sidemenu = document.querySelector('.sidemenu');
let hamburger = document.querySelector('.hamburger');
let closeBtn = document.querySelector('.fa-xmark');
let ham = document.querySelector('.hamburger');

function showHamburger() {
  sidemenu.style.display = 'block';
  ham.style.display = 'none';
  closeBtn.style.display = 'block';
}

function closeHamburger() {
  sidemenu.style.display = 'none';
  ham.style.display = 'block';
  closeBtn.style.display = 'none';
}


hamburger.onclick = showHamburger;
closeBtn.onclick = closeHamburger;



//Set API endpoint URL
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=068f0f7197e9637e1ff61c5fdffa4c95&page=1';

const container = document.querySelector('.movie');

 //Fetch data from API and parse JSON response
fetch(url)
  .then(response => response.json())
  .then(data => {
    
    // Loop through the results and create HTML for each movie
    data.results.forEach(movie => {
      console.log(data)
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



