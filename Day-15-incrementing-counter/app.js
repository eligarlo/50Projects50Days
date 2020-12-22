const counters = document.querySelectorAll('.counter')

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomFollowing = [
  randomIntFromInterval(25000, 100000),
  randomIntFromInterval(7500, 50000),
  randomIntFromInterval(5000, 10000),
]

counters.forEach((counter, i) => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = randomFollowing[i]
    const c = +counter.innerText

    const increment = target / 400

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innerText = target
    }
  }
  updateCounter()
})
