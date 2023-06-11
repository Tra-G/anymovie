// Set the TMDB API endpoint and API key
const tmdbEndpoint = 'https://api.themoviedb.org/3';
const tmdbApiKey = '068f0f7197e9637e1ff61c5fdffa4c95';

//Get a reference to the HTML elements
const movieDetailsContainer = document.querySelector('.detailsContainer');
const moviePoster = movieDetailsContainer.querySelector('.moviePoster');
const movieDetailsTitle = movieDetailsContainer.querySelector('.movieDetailsTitle');
const movieDetailsRating = movieDetailsContainer.querySelector('.rating');
const movieDetailsReleaseYear = movieDetailsContainer.querySelector('.releaseYear');
const movieDetailsPopularity = movieDetailsContainer.querySelector('.Popularity');
const movieDetailsOverview = movieDetailsContainer.querySelector('.overview');
const movieDetailsCastContainer = movieDetailsContainer.querySelector('.castdetails');

//Define the function to populate the movie details
async function populateMovieDetails(movieId) {
//Fetch the movie details from the TMDB API
  const response = await fetch(`${tmdbEndpoint}/movie/${movieId}?api_key=${tmdbApiKey}&language=en-US`);
  const data = await response.json();

  // Populate the movie details in the HTML elements
  moviePoster.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  movieDetailsTitle.textContent = data.title;
  movieDetailsRating.textContent = `Rating: ${data.vote_average}`;
  movieDetailsReleaseYear.textContent = `Release Year: ${data.release_date.slice(0, 4)}`;
  movieDetailsPopularity.textContent = `Popularity: ${data.popularity}`;
  movieDetailsOverview.textContent = data.overview;

  // Fetch the top cast members from the TMDB API
  const castResponse = await fetch(`${tmdbEndpoint}/movie/${movieId}/credits?api_key=${tmdbApiKey}&language=en-US`);
  const castData = await castResponse.json();

  // Populate the top cast members in the HTML elements
  const topCast = castData.cast.slice(0, 5);
  topCast.forEach((castMember) => {
    const castPosterItem = document.createElement('div');
    castPosterItem.classList.add('castPosterItem');

    const castPoster = document.createElement('img');
    castPoster.classList.add('castPoster');
    castPoster.src = `https://image.tmdb.org/t/p/w185${castMember.profile_path}`;
    castPoster.alt = `${castMember.name} poster`;

    const castName = document.createElement('div');
    castName.classList.add('castName');
    castName.textContent = castMember.name;

    castPosterItem.appendChild(castPoster);
    castPosterItem.appendChild(castName);
    movieDetailsCastContainer.appendChild(castPosterItem);
  });
}

// Call the populateMovieDetails function with a movie ID to populate the details
populateMovieDetails(603692);