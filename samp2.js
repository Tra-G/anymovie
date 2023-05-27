

/*const url = 'https://api.themoviedb.org/3/movie/popular?api_key=068f0f7197e9637e1ff61c5fdffa4c95&page=1';

const container = document.querySelector('.movie');

 //Fetch data from API and parse JSON response
fetch(url)
  .then(response => response.json())
  .then(data => {
    

    const movies = data.results.slice(0, 1);
    movies.forEach(movie => {
        data.results.forEach(movie => {    
            const container = `
            <div class="bg-swipe">          
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
              <h2>${movie.original_title}</h2>
              <div class="rate">
                <p class="year">${movie.release_date}</p>
                <p>${movie.vote_average}</p>
              </div>
            </div>
            `;
      
            // Add the movie HTML to the container element     
            document.querySelector('.container').innerHTML += container;
            //container.innerHTML += html;
            console.log(data)
          });
    })
  })
  .catch(error => console.error(error));*/



 
const apiKey = '068f0f7197e9637e1ff61c5fdffa4c95'; 
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
.then(response => response.json())
.then(data => {

    const movies = data.results.slice(0, 1); 
    const resultsList = document.getElementById('results-list');

    movies.forEach(movie => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const title = document.createElement('h3');
    const releaseDate = document.createElement('p');
    const overview = document.createElement('p');

    li.classList.add('movie');
    img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    console.log(movie.poster_path)
    img.alt = `${movie.title} poster`;
    title.textContent = movie.title;
    releaseDate.textContent = `Release date: ${movie.release_date}`;
    overview.textContent = movie.overview;

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(releaseDate);
    li.appendChild(overview);
    resultsList.appendChild(li);
    });
    })
    .catch(error => console.log(error));
           
        
            