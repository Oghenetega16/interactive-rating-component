const numberClicked = document.querySelectorAll('.numbers');
const button = document.getElementById('button');
const main = document.getElementById('main');
const container = document.getElementById('container');
const selectedNumber = document.getElementById('selectedNumber');
let lastClicked = null;
let valueOfP;

numberClicked.forEach((p) => {
    p.addEventListener('click', () => {
        if (lastClicked) {
            lastClicked.style.backgroundColor = '';
        }
        p.style.backgroundColor = 'var(--white)';
        p.style.color = 'var(--very-dark-blue)';
        lastClicked = p;

        valueOfP = p.textContent;
    });
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (lastClicked) {
        selectedNumber.innerHTML = `${valueOfP}`;
        main.classList.add('hide');
        container.classList.remove('hide');
    }
    
});