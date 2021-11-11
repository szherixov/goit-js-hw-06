const arrayCategories = categories.children.length;
console.log(`количевство категорий: ${arrayCategories}`);

const liEl = document.querySelectorAll('.item');

console.log(liEl);

liEl.forEach(el => {
    
    console.log(`Category name: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
