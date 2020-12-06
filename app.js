const container = document.querySelector('.container')

const projectLinks = [
  {
    liveDemo: 'Day-1-expanding-cards',
    repoUrl: 'https://github.com/eligarlo/50Projects50Days/tree/master/Day-1-expanding-cards',
    title: 'Day 1️',
    description: 'Expanding Cards',
    imgSrc: '/assets/Day-1-screenshot.jpg',
  },
  {
    liveDemo: 'Day-2-progress-steps',
    repoUrl: 'https://github.com/eligarlo/50Projects50Days/tree/master/Day-2-progress-steps',
    title: 'Day 2️',
    description: 'Progress Steps',
    imgSrc: '/assets/Day-2-screenshot.jpg',
  },
  {
    liveDemo: 'Day-3-rotating-navigation',
    repoUrl: 'https://github.com/eligarlo/50Projects50Days/tree/master/Day-3-rotating-navigation',
    title: 'Day 3️',
    description: 'Rotating Navigation',
    imgSrc: '/assets/Day-3-screenshot.jpg',
  },
  {
    liveDemo: 'Day-4-hidden-search-widget',
    repoUrl: 'https://github.com/eligarlo/50Projects50Days/tree/master/Day-4-hidden-search-widget',
    title: 'Day 4️',
    description: 'Hidden Search Widget',
    imgSrc: '/assets/Day-4-screenshot.jpg',
  },
  {
    liveDemo: 'Day-5-blurry-loading',
    repoUrl: 'https://github.com/eligarlo/50Projects50Days/tree/master/Day-5-blurry-loading',
    title: 'Day 5️',
    description: 'Blurry Loading',
    imgSrc: '/assets/Day-5-screenshot.jpg',
  },
  {
    liveDemo: 'Day-6-scroll-animation',
    repoUrl: 'https://github.com/eligarlo/50Projects50Days/tree/master/Day-6-scroll-animation',
    title: 'Day 6',
    description: 'Scroll Animation',
    imgSrc: '/assets/Day-6-screenshot.jpg',
  },
]

projectLinks.forEach((projectLink, i) => {
  container.innerHTML += generateAnchorTag(
    projectLink.liveDemo,
    projectLink.repoUrl,
    projectLink.title,
    projectLink.description,
    projectLink.imgSrc
  )
})

function generateAnchorTag(demoUrl, sourceUrl, title, description, imgSrc) {
  return `<div class="card">
            <div class="bg-image" style="
            background: url('${imgSrc}'); background-size: cover;"></div>
            <div class="content">
              <h2 class="title">${title}</h2>
              <p class="copy">
                ${description}
              </p>
              <a class="btn" href="${demoUrl}">Live Demo</a>
              <a class="btn" target="_blank" href="${sourceUrl}">
                Source Code
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>`
}