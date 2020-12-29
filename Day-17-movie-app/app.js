//#region search input
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  if (search.classList.contains('active')) {
    getMoviesBySearch()
  }
  search.classList.toggle('active')
  input.focus()
})
//#end region search input

//#region movie API
const API_KEY = '70b9a8da69d93d1361319639326d1b68'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`

const main = document.querySelector('#main')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function getMoviesBySearch() {
  const searchTerm = input.value
  if (searchTerm && searchTerm.trim() !== '') {
    getMovies(SEARCH_API + searchTerm)

    input.value = ''
  } else {
    window.location.reload()
  }
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = ` <img src="${IMG_PATH + poster_path}" alt="${title}" />
                          <div class="movie-info">
                            <h3>${title}</h3>
                            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                          </div>
                          <div class="overview">
                            <h3>Overview</h3>
                            ${overview}
                          </div>
                          `

    main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}
//#end region movie API
