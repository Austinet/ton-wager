// Changes texts and colors synchronously 
const textArray = ['Ton Blockchain', 'Telegram']

const changedTextContainer = document.querySelector('.changed-text')
const changedColorContainer = document.querySelector('.changed-color')
const alternateTextContainer = document.querySelector('.alternate-text')
let currentIndex = 0

changedTextContainer.textContent = textArray[0]

setInterval(() => {
    changedColorContainer.classList.toggle('orange-text')
    alternateTextContainer.classList.toggle('remove-text')

    currentIndex = (currentIndex + 1) % textArray.length
    changedTextContainer.textContent = textArray[currentIndex]
}, 4000);


// Audio player
const audio = document.getElementById('audio-file')
const controlButton = document.getElementById('control-audio-btn')
const audioIcon = document.getElementById('audio-icon')
const audioIconPath = 'assets/icons/'

controlButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        audioIcon.src = audioIconPath + 'audio.svg'
    } else {
        audio.pause()
        audioIcon.src = audioIconPath + 'mute-audio.svg'
    }
})
