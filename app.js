const container = document.querySelector('.container')

const projectLinks = [
  { url: 'Day-1-expanding-cards', description: 'Day 1️⃣ - Expanding Cards' },
  { url: 'Day-2-progress-steps', description: 'Day 2️⃣ - Progress Steps' },
  { url: 'Day-3-rotating-navigation', description: 'Day 3️⃣ - Rotating Navigation' },
  { url: 'Day-4-hidden-search-widget', description: 'Day 4️⃣ - Hidden Search Widget' },
  { url: 'Day-5-blurry-loading', description: 'Day 5️⃣ - Blurry Loading' },
]

projectLinks.forEach((projectLink) => {
  container.innerHTML += generateAnchorTag(projectLink.url, projectLink.description)
})

function generateAnchorTag(url, description) {
  return `<a href="${url}">${description}</a>`
}
