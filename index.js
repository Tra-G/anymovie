//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".sidemenu");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("show");
});

/*closeIcon.addEventListener('click', () => {
  closeicon.classList.remove('show');
});*/


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



    const API_KEY = '068f0f7197e9637e1ff61c5fdffa4c95';
    const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY;

    fetch(BASE_URL)
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


//API call for Popular movies
const apiKey = '068f0f7197e9637e1ff61c5fdffa4c95'; // replace with your own API key
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    movies.forEach(movie => {
      const posterPath = movie.poster_path;
      const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;
      const title = movie.original_title;
      const rating = movie.vote_average;
      const releaseDate = movie.release_date;

      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      const imgBox = document.createElement('div');
      imgBox.classList.add('img-box');

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = title;

      const header = document.createElement('header');
      const heading = document.createElement('h3');
      heading.textContent = title;

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
      swiperWrapper.appendChild(slide);
    });
  })
  .catch(error => console.error(error));