const images = document.querySelectorAll('.slider__image');
const leftArrow = document.querySelector('.slider__arrow_left');
const rightArrow = document.querySelector('.slider__arrow_right');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

leftArrow.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Инициализация первого изображения
showImage(currentIndex);
