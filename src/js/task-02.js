const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingEl = document.querySelector('#ingredients')
const ingredientsElements = ingredients.map(el => {
    let ingSettings = document.createElement('li');
    ingSettings.textContent = el;
    ingSettings.classList.add('.item');
    return f;
});
 
ingEl.append(...ingredientsElements)


