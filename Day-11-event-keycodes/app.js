const insert = document.querySelector('#insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
    ${event.key.trim() === '' ? 'Space' : event.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>

  <div class="key">Press any key to get the keyCode</div>
  `
})
