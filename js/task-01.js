const categoriesEl = document.querySelector('#categories');
const listChildEl = categoriesEl.children;
console.log(`Number of categories: ${listChildEl.length}`);
console.log('\n');

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    const liEl = item.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${liEl.length}`);
    console.log('\n');
});
