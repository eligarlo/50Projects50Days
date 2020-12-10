const url = 'https://api.chucknorris.io/jokes/random'

const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

fetchRandomFact()

jokeBtn.addEventListener('click', () => {
  fetchRandomFact()
})

async function fetchRandomFact() {
  const fetchConfig = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch(url, fetchConfig)

  const fact = await response.json()

  jokeEl.innerHTML = fact.value
}
