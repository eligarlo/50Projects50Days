const toggleEl = document.querySelector('#toggle')
const navEl = document.querySelector('#nav')

toggleEl.addEventListener('click', () => {
  navEl.classList.toggle('active')
})
