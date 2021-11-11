function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyBG = document.querySelector('body')
const btnColor = document.querySelector('.change-color')
const colorText = document.querySelector('.color')



btnColor.addEventListener('click', () => {
  bodyBG.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
})























