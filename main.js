// Переход на страницу "collect"
document.getElementById("collect-button").addEventListener("click", () => {
    window.location.href = "index.html";
  });
  
  // Массив с ID изображений
  const imageIds = ["jack-image", "queen-image", "jacksheep-image", "king-image"];
  
  // Индекс текущего верхнего изображения
  let currentIndex = 0; // Начинаем с Jack
  
  // Направление переключения (true - вперед, false - назад)
  let direction = true;
  
  // Функция для переключения изображений
  function toggleImage() {
    // Получаем массив всех изображений
    const images = document.querySelectorAll(".image-stack img");
  
    // Создаем массив z-index значений в порядке убывания
    let zIndexValues = [4, 3, 2, 1];
  
    // Обновляем z-index и opacity для всех изображений
    images.forEach((img, index) => {
      const imageId = imageIds[(currentIndex + index) % imageIds.length];
      const currentImage = document.getElementById(imageId);
  
      // Устанавливаем z-index
      currentImage.style.zIndex = zIndexValues[index];
  
      // Устанавливаем opacity
      if (direction && index !== 0) {
        currentImage.style.opacity = "0.5"; // Полупрозрачные карты при движении вперед
      } else {
        currentImage.style.opacity = "1"; // Видимые карты при движении назад
      }
    });
  
    // Обновляем индекс
    if (direction) {
      currentIndex = (currentIndex + 1) % imageIds.length; // Вперед
    } else {
      currentIndex = (currentIndex - 1 + imageIds.length) % imageIds.length; // Назад
    }
  
    // Если достигли конца массива, меняем направление
    if (currentIndex === imageIds.length - 1) {
      direction = false; // Переключаем на обратное направление
    } else if (currentIndex === 0) {
      direction = true; // Переключаем на прямое направление
    }
  }
  
  // Обработчики событий для кликов на изображениях
  document.querySelectorAll(".image-stack img").forEach(img => {
    img.addEventListener("click", toggleImage);
  });