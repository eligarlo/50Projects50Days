const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(fetchRandomUsers, 2000)

const API_URL = 'https://randomuser.me/api'

async function fetchRandomUsers() {
  const fetchConfig = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch(API_URL, fetchConfig)
  const res = await response.json()
  const user = res && res.results[0]

  header.innerHTML = '<img src="https://source.unsplash.com/gySMaocSdqs" alt=""/>'
  title.innerHTML = `${user.name.first} ${user.name.last}`
  excerpt.innerHTML = `${user.location.city}, ${user.location.country}`
  profile_img.innerHTML = `<img src="${user.picture.thumbnail}" alt="" />`
  name.innerHTML = `${user.login.username}`
  date.innerHTML = `Registered ${new Date(user.registered.date).toLocaleDateString('es-Es')}`

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
