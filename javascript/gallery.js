import { toggleMenu } from './index.js';

const galleryButton = document.querySelector('.fas.fa-bars');
galleryButton.addEventListener('click', toggleMenu);

const galleryImages = document.querySelectorAll('.image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.lightbox-close');
const nextButton = document.querySelector('.lightbox-next');
const prevButton = document.querySelector('.lightbox-prev');

let currentIndex = 0;

const openLightBox = (index) => {
    currentIndex = index;
    const imageSrc = galleryImages[index].getAttribute('src');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        openLightBox(index);
    })
});

const closeLightBox = () => {
    lightbox.style.display = 'none';
}

const nextImage = () => {
    if (currentIndex < galleryImages.length - 1) {
        currentIndex++;
        openLightBox(currentIndex);
    }
}

const prevImage = () => {
    if (currentIndex > 0) {
        currentIndex--;
        openLightBox(currentIndex);
    }
}

closeButton.addEventListener('click', closeLightBox);
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);



