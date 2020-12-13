const toggleButtons = document.querySelectorAll('.faq')

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener('click', () => {
    removeActiveClass()
    toggleButton.classList.toggle('active')
  })
})

function removeActiveClass() {
  toggleButtons.forEach((toggleButton) => {
    toggleButton.classList.remove('active')
  })
}
