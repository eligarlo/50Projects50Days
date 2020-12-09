const container = document.querySelector('.container')

fetch('./projects.json')
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data.projects)
    data.projects.forEach((project, i) => {
      container.innerHTML += generateAnchorTag(
        project.liveDemo,
        project.repoUrl,
        project.title,
        project.description,
        project.imgSrc
      )
    })
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
