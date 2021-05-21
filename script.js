const img = [
    '157670-cii-1920x1080.jpg',
    '16212357243002_-5bu3fojrfg.jpg',
    'artist-sportkar-1920x1080.jpg',
    'avtomobil-1920x1080.jpg',
    'avtomobilnye_shiny-1920x1080.jpg',
    'bili-maklaren-1920x1080.jpg'
];

let count = img.length;

function init() {
    let cards = document.querySelectorAll('.card');
    shuffle(img);
    for (let i = 0; i < img.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.background = 'url("./images/' + img[i] + '")';
        card.style.backgroundSize = 'cover';
        card.style.transform = 'rotate(' + randomInteger(-15, 15) + 'deg) ' + 'translate(' + randomInteger(-40, 40) + 'px,' + randomInteger(-40, 40) + 'px)';
        // card.style.transform = ;
        document.querySelector('.cover').append(card);
    }
}

init();

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

document.querySelector('.cover').addEventListener('click', event => {
    console.log(event.target);
    event.target.classList.add('go');
    count--;
    if (count == 0) {
        init();
        count = img.length;
    }
});