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
        overviewElement.textContent = movie.overview;
      })
      .catch(error => console.error(error));
}

// Get references to the buttons that will trigger the movie list display
const home = document.getElementById('home');
const topRated = document.getElementById('topRated');
const popular = document.getElementById('popular');
const newMovies = document.getElementById('newMovies');

// Call showBgImage with the URL of the movie list you want to display
const ComingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
showBgImage(ComingUrl);

// Add event listeners to the buttons
home.addEventListener('click', () => {
  showBgImage(upComingUrl);
});

popular.addEventListener('click', () => {
  const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  showBgImage(popularUrl);
});

topRated.addEventListener('click', () => {
  const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  showBgImage(topRatedUrl);
});

newMovies.addEventListener('click', () => {
  const newMoviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
  showBgImage(newMoviesUrl);
});




//Making the link only visible to click event
const homeLink = document.getElementById('home');
const actionLink = document.getElementById('action');
const popularLink = document.getElementById('popular');
const topRatedLink = document.getElementById('topRated');
const newMoviesLink = document.getElementById('newMovies');
const BgImg = document.getElementById('bg-container');
const genreContainer = document.getElementById('genreContainer');
const sliderContainer = document.getElementById('slider-container');

//anyMovieContainer.innerHTML = '';
homeLink.addEventListener('click', () => {
  BgImg.style.display = 'block';
  sliderContainer.style.display = 'block';
})

actionLink.addEventListener('click', () => {
  genreContainer.style.display = 'block';
})

popularLink.addEventListener('click', () => {
  BgImg.style.display = 'block';
  sliderContainer.style.display = 'block';
})

topRatedLink.addEventListener('click', () => {
  BgImg.style.display = 'block';
  sliderContainer.style.display = 'block';
})

newMoviesLink.addEventListener('click', () => {
  BgImg.style.display = 'block';
  sliderContainer.style.display = 'block';
})


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
const homepage = document.getElementById('home');
const topRatedButton = document.getElementById('topRated');
const popularButton = document.getElementById('popular');
const newMoviesButton = document.getElementById('newMovies');

//Call displayMovieList with upcoming movies URL when the page is loaded
const upComingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=068f0f7197e9637e1ff61c5fdffa4c95';
displayMovieList(upComingUrl);

//Upcoming movies - Home
homepage.addEventListener('click', () => {
  displayMovieList(upComingUrl);
});

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




//Movie By Genres
//Calling the api key, base url and image url
const API_KEY = '068f0f7197e9637e1ff61c5fdffa4c95';
const MOVIES_URL = 'https://api.themoviedb.org/3/discover/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

//Creating a variable for each button
const Genres = document.getElementById('Genres');
const bgimage = document.getElementById('bg-container');
const moviesCon = document.getElementById('slider-container');


const action = document.getElementById('action');
const comedy = document.getElementById('comedy');
const drama = document.getElementById('drama');
const horror = document.getElementById('horror');
const romance = document.getElementById('romance');
const scifi = document.getElementById('science-fiction');
const war = document.getElementById('war');
const family = document.getElementById('family');
const mystery = document.getElementById('mystery');
const music = document.getElementById('music');
const western = document.getElementById('western');
const tvMovies = document.getElementById('tvMovies');
const adventure = document.getElementById('adventure');
const thriller = document.getElementById('thriller');
const animation = document.getElementById('animation');
const history = document.getElementById('history');
const fantasy = document.getElementById('fantasy');
const crime = document.getElementById('crime');



//Movie Genre By title
function displayGenreTitle(genre) {
  document.getElementById("genre-header").innerHTML = "<h1>" + genre + "</h1>";
}


//Creating a function for the movie genre
function displayGenre(genreId) {
  Genres.innerHTML = '';
  /*bgimage.innerHTML = '';
  moviesCon.innerHTML = '';*/
  
  

  const url = `${MOVIES_URL}?api_key=${API_KEY}&with_genres=${genreId}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
  data.results.forEach(movie => {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  const moviePoster = document.createElement('img');
  moviePoster.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
  moviePoster.alt = movie.title;

  const movieInfo = document.createElement('div');
  movieInfo.classList.add('movie-info');

  const movieTitle = document.createElement('h3');
  movieTitle.textContent = movie.title;

  const movieRating = document.createElement('span');
  movieRating.classList.add('movie-rating');
  movieRating.textContent = `${movie.vote_average}`;

  const movieYear = document.createElement('span');
  movieYear.classList.add('movie-year');
  movieYear.textContent = `${movie.release_date.substring(0, 4)}`;

  movieInfo.appendChild(movieTitle);
  movieInfo.appendChild(movieRating);
  movieInfo.appendChild(movieYear);

  movieElement.appendChild(moviePoster);
  movieElement.appendChild(movieInfo);

  Genres.appendChild(movieElement);
});
})
.catch(error => {
console.error(error);
});
}


// Add event listeners to the buttons
  action.addEventListener('click', () => {
    displayGenre(28);
  });

  comedy.addEventListener('click', () => {
    displayGenre(35);
  });

  drama.addEventListener('click', () => {
    displayGenre(18);
  });

  horror.addEventListener('click', () => {
    displayGenre(27);
  });

  romance.addEventListener('click', () => {
    displayGenre(10749);
  });

  scifi.addEventListener('click', () => {
    displayGenre(878);
  });

  thriller.addEventListener('click', () => {
    displayGenre(53);
  });

  adventure.addEventListener('click', () => {
    displayGenre(12);
  });

  mystery.addEventListener('click', () => {
    displayGenre(9648);
  });

  history.addEventListener('click', () => {
    displayGenre(36);
  });

  western.addEventListener('click', () => {
    displayGenre(37);
  });

  war.addEventListener('click', () => {
    displayGenre(10752);
  });

  family.addEventListener('click', () => {
    displayGenre(10751);
  });

  music.addEventListener('click', () => {
    displayGenre(10402);
  });

  animation.addEventListener('click', () => {
    displayGenre(16);
  });

  crime.addEventListener('click', () => {
    displayGenre(80);
  });

  fantasy.addEventListener('click', () => {
    displayGenre(14);
  });

  displayGenreTitle(28);


const bgbutton = document.getElementById('bg-container');
const moviesbutton = document.getElementById('slider-container'); 
const genreContain = document.getElementById('genreContainer');

const btnHome = document.getElementById('home');
const btnpopular = document.getElementById('popular');
const btnTopRated = document.getElementById('topRated');
const btnUpComing = document.getElementById('newMovies');

const actionGenreBtn = document.getElementById('action');
const adventureGenreBtn = document.getElementById('adventure'); 
const comedyGenreBtn = document.getElementById('comedy');
const dramaGenreBtn = document.getElementById('drama');
const horrorGenreBtn = document.getElementById('horror');
const romanceGenreBtn = document.getElementById('romance');
const scifiGenreBtn = document.getElementById('science-fiction');
const warGenreBtn = document.getElementById('war');
const familyGenreBtn = document.getElementById('family');
const mysteryGenreBtn = document.getElementById('mystery');
const musicGenreBtn = document.getElementById('music');
const westernGenreBtn = document.getElementById('western');
const tvMoviesGenreBtn = document.getElementById('tvMovies');
const thrillerGenreBtn = document.getElementById('thriller');
const animationGenreBtn = document.getElementById('animation');
const historyGenreBtn = document.getElementById('history');
const fantasyGenreBtn = document.getElementById('fantasy');
const crimeGenreBtn = document.getElementById('crime');


  function GenreById() {
    bgbutton.style.display = 'none';
    moviesbutton.style.display = 'none';
    genreContain.style.display = 'block';
  }

  actionGenreBtn.addEventListener('click', () => {
    GenreById('action');
  })

  comedyGenreBtn.addEventListener('click', () => {
    GenreById('comedy');
  })

  adventureGenreBtn.addEventListener('click', () => {
    GenreById('adventure');
  })

  dramaGenreBtn.addEventListener('click', () => {
    GenreById('drama');
  })

  horrorGenreBtn.addEventListener('click', () => {
    GenreById('horror');
  })

  romanceGenreBtn.addEventListener('click', () => {
    GenreById('romance');
  })

  scifiGenreBtn.addEventListener('click', () => {
    GenreById('science-fiction');
  })

  warGenreBtn.addEventListener('click', () => {
    GenreById('war');
  })

  familyGenreBtn.addEventListener('click', () => {
    GenreById('family');
  })

  mysteryGenreBtn.addEventListener('click', () => {
    GenreById('mystery');
  })

  musicGenreBtn.addEventListener('click', () => {
    GenreById('music');
  })

  westernGenreBtn.addEventListener('click', () => {
    GenreById('western');
  })

  tvMoviesGenreBtn.addEventListener('click', () => {
    GenreById('tvMovie');
  })

  thrillerGenreBtn.addEventListener('click', () => {
    GenreById('thriller');
  })

  animationGenreBtn.addEventListener('click', () => {
    GenreById('animation');
  })

  historyGenreBtn.addEventListener('click', () => {
    GenreById('history');
  })

  fantasyGenreBtn.addEventListener('click', () => {
    GenreById('fantasy');
  })

  crimeGenreBtn.addEventListener('click', () => {
    GenreById('crime');
  })




  

  function homeId() {
    genreContain.style.display = 'none';
    bgbutton.style.display = 'block';
    moviesbutton.style.display = 'block';
    
  }

  btnHome.addEventListener('click', () => {
    homeId('home');
  })

  btnTopRated.addEventListener('click', () => {
    homeId('topRated');
  })

  btnpopular.addEventListener('click', () => {
    homeId('popular');
  })

  btnUpComing.addEventListener('click', () => {
    homeId('newMovies');
  })

  
