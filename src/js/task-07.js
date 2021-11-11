const rangeSize = document.querySelector('#font-size-control')
const rangeText = document.querySelector('#text')

rangeText.style.fontSize = `${rangeSize.value}px`;

rangeSize.addEventListener('input', inputValue);

function inputValue(event) {
    rangeText.style.fontSize = `${event.currentTarget.value}px`;
}



























