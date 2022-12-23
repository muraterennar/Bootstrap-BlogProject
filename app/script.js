let openSelector = document.getElementById('open');
let closeSelector = document.getElementById('close');

openSelector.addEventListener('click', () => {
    openSelector.style.display = 'none';
})

closeSelector.addEventListener('click', () => {
    openSelector.style.display = 'block';
})