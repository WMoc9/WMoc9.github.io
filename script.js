const photos = [
  "photos/1.jpg",
  "photos/2.jpg",
  "photos/3.jpg",
  "photos/4.jpg",
  "photos/5.jpg",
  "photos/6.jpg",
  "photos/7.png",
  "photos/8.jpg",
];

let currentPhotoIndex = 0;
const photoElement = document.getElementById("photo");

const animations = [
  "rotate(360deg) scale(0)",
  "rotate(-360deg) scale(0)",
  "translateX(100%) ",
  "translateX(-100%) ",
  "translateY(100%)",
  "translateY(-100%)",
  "skewX(45deg)",
  "skewY(45deg)",
  "rotateX(360deg)",
  "rotateY(360deg)",
];

// Устанавливаем первую фотографию при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  if (photoElement) {
    photoElement.src = photos[currentPhotoIndex];
  }
});

photoElement.addEventListener("click", () => {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;

  // Выбираем случайную анимацию
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];

  photoElement.style.transform = randomAnimation;

  photoElement.addEventListener(
    "transitionend",
    () => {
      // Сбрасываем каждую трансформацию по отдельности
      photoElement.style.transform =
        "rotate(0deg) scale(1) translateX(0) translateY(0) skewX(0deg) skewY(0deg) rotateX(0deg) rotateY(0deg)";

      // Устанавливаем новый источник изображения
      photoElement.src = photos[currentPhotoIndex];
    },
    { once: true }
  );
});
