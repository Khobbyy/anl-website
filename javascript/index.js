let isMenuOpen = false;

export const toggleMenu = () => {
  const navLinks = document.getElementById("links");
  if (isMenuOpen) {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
  isMenuOpen = !isMenuOpen;
};

const menuIcon = document.querySelector(".fas.fa-bars");
menuIcon.addEventListener("click", toggleMenu);

const imageSlider = document.querySelector(".image-slider");
const images = [
  "/images/IMG_2.jpg",
  "/images/IMG_10.jpg",
  "/images/IMG_6.jpg",
  "/images/IMG_15.jpg",
];

const imageObjects = [];
for (const imageSrc of images) {
  const img = new Image();
  img.src = imageSrc;
  imageObjects.push(img);
}

let currentImageIndex = 0;

function changeBackgroundImage() {
  imageSlider.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

const firstImage = new Image();
firstImage.src = images[0];
firstImage.onload = () => {
  if (imageSlider) {
    imageSlider.style.backgroundImage = `url(${images[0]})`;
    setInterval(changeBackgroundImage, 4000);
  }
};

// export { toggleMenu };
