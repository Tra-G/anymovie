//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".sidemenu");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("show");
});

/*closeIcon.addEventListener('click', () => {
  closeicon.classList.remove('none');
});
*/

//The search bar
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.searchBtn');
const closeIcon = document.querySelector('.closeSearch');

searchBtn.addEventListener('click', () => {
  searchBar.style.display = 'flex';
  closeIcon.style.display = 'flex';
  searchBtn.style.display = 'none';

});

closeIcon.addEventListener('click', () => {
  searchBar.style.display = 'none';
  searchBtn.style.display = 'block';
  closeIcon.style.display = 'none';
});

/*
searchBtn.addEventListener("click", function() {
  searchBar.classList.toggle("show");
});

closeIcon.addEventListener('click', () => {
  searchBar.classList.remove('show');
});

/*
function showSearch() {
  searchBar.style.display = 'flex';
  searchBtn.style.display = 'none';
  closeIcon.style.display = 'block';
}

function closeSearch() {
  searchBar.style.display = 'none';
  searchBtn.style.display = 'block';
  closeIcon.style.display = 'none';
}

searchBtn.onclick = showSearch;
closeIcon.onclick = closeSearch;
*/

function showBgImage(url) {
  fetch(url)
      .then(response => response.json())
      .then(data => {
        const movie = data.results[0];
        
        
        
        const backdropUrl = 'https://image.tmdb.org/t/p/original' + movie.backdrop_path;
        const posterUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

        // Set the background image
        const bgImageElement = document.querySelector('.bgImage');
        bgImageElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backdropUrl})`;

        // Set the movie title, year, rating, genre, and overview
        const titleElement = document.querySelector('.title');
        const yearElement = document.querySelector('.year');
        const ratingElement = document.querySelector('.rating');
        const genreElement = document.querySelector('.genre');
        const overviewElement = document.querySelector('.overview');

        //combine them
        titleElement.textContent = movie.original_title;
        yearElement.textContent = movie.release_date.substring(0, 4);
        ratingElement.textContent = movie.vote_average;
        genreElement.textContent = movie.genre_ids.join(', ');
        overviewElement.textContent =movie.overview;
      })
      .catch(error => console.error(error));
}

//Get references to the buttons that will trigger the movie list display
const topRated = document.getElementById('topRated');
const popular = document.getElementById('popular');
const newMovies = document.getElementById('newMovies');


//Popular Movies
popular.addEventListener('click', () => {
  const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  showBgImage(popularUrl);
});

//Top rated movies
topRated.addEventListener('click', () => {
  const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  showBgImage(topRatedUrl);
});

//New Movies
newMovies.addEventListener('click', () => {
  const newMoviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  showBgImage(newMoviesUrl);
});









//Popular movie slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,         
    },
  },
});




function displayMovieList(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    
    /*const swiperWrapper = document.querySelector('.movie-wrapper');*/
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach(movie => {
      const posterPath = movie.poster_path;
      const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
      const title = movie.original_title;
      const rating = movie.vote_average;
      const releaseDate = movie.release_date;

      const slide = document.createElement('div');
      slide.classList.add('movieContainer');

      const imgBox = document.createElement('div');
      imgBox.classList.add('img-box');

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = title;

      const header = document.createElement('header');
      header.classList.add('popularHead');
      
      const heading = document.createElement('a');
      heading.href = `https://www.themoviedb.org/movie/${movie.id}`;
      heading.textContent = title;
      heading.classList.add('titlelink');

      const voteDate = document.createElement('div');
      voteDate.classList.add('votedate');

      const vote = document.createElement('div');
      vote.classList.add('vote');

      const starIcon = document.createElement('i');
      starIcon.style.color = 'rgb(255, 234, 0)';
      starIcon.classList.add('fa-solid', 'fa-star', 'star');

      const ratingSpan = document.createElement('span');
      ratingSpan.textContent = rating;

      const releaseDateDiv = document.createElement('div');
      releaseDateDiv.textContent = releaseDate;

      vote.appendChild(starIcon);
      vote.appendChild(ratingSpan);
      voteDate.appendChild(vote);
      voteDate.appendChild(releaseDateDiv);

      header.appendChild(heading);
      imgBox.appendChild(img);
      imgBox.appendChild(header);
      imgBox.appendChild(voteDate);
      slide.appendChild(imgBox);
      movieList.appendChild(slide);
    });

    
  })
  .catch(error => console.error(error));
}

//Get references to the buttons that will trigger the movie list display
const topRatedButton = document.getElementById('topRated');
const popularButton = document.getElementById('popular');
const newMoviesButton = document.getElementById('newMovies');


//Popular Movies
popularButton.addEventListener('click', () => {
  const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  displayMovieList(popularUrl);
});

//Top rated movies
topRatedButton.addEventListener('click', () => {
  const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  displayMovieList(topRatedUrl);
});

//New Movies
newMoviesButton.addEventListener('click', () => {
  const newMoviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  displayMovieList(newMoviesUrl);
});





  