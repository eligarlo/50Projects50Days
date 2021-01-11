const button = document.querySelector('#button')
const toasts = document.querySelector('#toasts')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

button.addEventListener('click', createNotification)

function createNotification() {
  const notification = document.createElement('div')
  notification.classList.add('toast')

  notification.innerText = getRandomMessage()

  toasts.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
