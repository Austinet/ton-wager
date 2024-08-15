// Changes texts and colors synchronously 
const textArray = ['Ton Blockchain', 'Telegram']

let changedTextContainer = document.querySelector('.changed-text')
let changedColorContainer = document.querySelector('.changed-color')
let alternateTextContainer = document.querySelector('.alternate-text')
let currentIndex = 0

changedTextContainer.textContent = textArray[0]

setInterval(() => {
    changedColorContainer.classList.toggle('orange-text')
    alternateTextContainer.classList.toggle('remove-text')

    currentIndex = (currentIndex + 1) % textArray.length
    changedTextContainer.textContent = textArray[currentIndex]
}, 4000);
