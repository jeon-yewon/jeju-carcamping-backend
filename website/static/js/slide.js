const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImages[0].clientWidth;
console.log(size)

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
    counter++;
    if(counter >= carouselImages.length) counter = 0;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) counter = carouselImages.length;
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});


