const upRow = document.getElementById('up-row');
const header = document.getElementById('header');
const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const card = document.getElementById('card');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');

let stickyBttom = header.offsetHeight;
let stickCard = card.offsetTop - card.offsetHeight;
let result = body.offsetTop- body.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > stickCard) {
        card.classList.add('animate__animated');
        card.classList.add('animate__fadeInLeft');

        card2.classList.add('animate__animated');
        card2.classList.add('animate__fadeInLeft');
        card2.classList.add('animate__delay-1s');

        card3.classList.add('animate__animated');
        card3.classList.add('animate__fadeInLeft');

        card4.classList.add('animate__animated');
        card4.classList.add('animate__fadeInLeft');
        card4.classList.add('animate__delay-1s');
        // console.log('card offsetTop', stickCard)
    }
    else {
        card.classList.remove('animate__animated');
        card.classList.remove('animate__fadeOutLeft');

        card2.classList.remove('animate__animated');
        card2.classList.remove('animate__fadeOutLeft');
        card2.classList.remove('animate__delay-1s');

        card3.classList.remove('animate__animated');
        card3.classList.remove('animate__fadeOutLeft');

        card4.classList.remove('animate__animated');
        card4.classList.remove('animate__fadeOutLeft');
        card4.classList.remove('animate__delay-1s');
    }


    if (window.scrollY > stickyBttom) {
        upRow.style.display = 'block';
        navbar.classList.add('fixed-top');
        navbar.classList.add('shadow');
        navbar.classList.add('p-2');
        navbar.style.backgroundColor = '#262626';
    }
    else {
        upRow.style.display = 'none';
        navbar.classList.remove('fixed-top');
        navbar.classList.remove('shadow');
        navbar.classList.remove('p-2');
        navbar.style.backgroundColor = 'transparent';
    }

})
