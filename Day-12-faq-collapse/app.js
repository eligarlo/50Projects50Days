const toggleButtons = document.querySelectorAll('.faq')

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener('click', () => {
    if (toggleButton.classList.contains('active')) {
      removeActiveClass()
    } else {
      removeActiveClass()
      toggleButton.classList.add('active')
    }
  })
})

function removeActiveClass() {
  toggleButtons.forEach((toggleButton) => {
    toggleButton.classList.remove('active')
  })
}
