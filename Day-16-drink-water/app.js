const smallCups = document.querySelectorAll('.cup-small')
const liters = document.querySelector('#liters')
const percentage = document.querySelector('#percentage')
const remained = document.querySelector('#remained')

updateBigCup()

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', () => highlightCups(i))
})

function highlightCups(i) {
  if (i === 7 && smallCups[i].classList.contains('full')) i--

  if (
    smallCups[i].classList.contains('full') &&
    !smallCups[i].nextElementSibling.classList.contains('full')
  ) {
    i--
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= i) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
