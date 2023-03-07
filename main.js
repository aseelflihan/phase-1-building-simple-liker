const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')
const errorMessage = document.getElementById('modal-message')

modal.classList.add('hidden')

document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph')
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART
            heart.classList.add('activated-heart')
          } else {
            heart.innerText = EMPTY_HEART
            heart.classList.remove('activated-heart')
          }
        })
        .catch(error => {
          errorMessage.innerText = error
          modal.classList.remove('hidden')
          setTimeout(() => {
            modal.classList.add('hidden')
          }, 3000)
        })
    })
  })
})

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
