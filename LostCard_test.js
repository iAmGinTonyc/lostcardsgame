// Array of card data
const cards = [
  // Hearts (Черви)
  { rank: "2", suit: "hearts", image: "hearts/2.png", description: "This is a Two of Hearts" },
  { rank: "3", suit: "hearts", image: "hearts/3.png", description: "This is a Three of Hearts" },
  { rank: "4", suit: "hearts", image: "hearts/4.png", description: "This is a Four of Hearts" },
  { rank: "5", suit: "hearts", image: "hearts/5.png", description: "This is a Five of Hearts" },
  { rank: "6", suit: "hearts", image: "hearts/6.png", description: "This is a Six of Hearts" },
  { rank: "7", suit: "hearts", image: "hearts/7.png", description: "This is a Seven of Hearts" },
  { rank: "8", suit: "hearts", image: "hearts/8.png", description: "This is an Eight of Hearts" },
  { rank: "9", suit: "hearts", image: "hearts/9.png", description: "This is a Nine of Hearts" },
  { rank: "10", suit: "hearts", image: "hearts/10.png", description: "This is a Ten of Hearts" },
  { rank: "jack", suit: "hearts", image: "hearts/jack.png", description: "This is a Jack of Hearts" },
  { rank: "queen", suit: "hearts", image: "hearts/queen.png", description: "This is a Queen of Hearts" },
  { rank: "king", suit: "hearts", image: "hearts/king.png", description: "This is a King of Hearts" },
  { rank: "ace", suit: "hearts", image: "hearts/ace.png", description: "This is an Ace of Hearts" },
  // Spades (Пики)
  { rank: "2", suit: "spades", image: "spades/2.png", description: "This is a Two of Spades" },
  { rank: "3", suit: "spades", image: "spades/3.png", description: "This is a Three of Spades" },
  { rank: "4", suit: "spades", image: "spades/4.png", description: "This is a Four of Spades" },
  { rank: "5", suit: "spades", image: "spades/5.png", description: "This is a Five of Spades" },
  { rank: "6", suit: "spades", image: "spades/6.png", description: "This is a Six of Spades" },
  { rank: "7", suit: "spades", image: "spades/7.png", description: "This is a Seven of Spades" },
  { rank: "8", suit: "spades", image: "spades/8.png", description: "This is an Eight of Spades" },
  { rank: "9", suit: "spades", image: "spades/9.png", description: "This is a Nine of Spades" },
  { rank: "10", suit: "spades", image: "spades/10.png", description: "This is a Ten of Spades" },
  { rank: "jack", suit: "spades", image: "spades/jack.png", description: "This is a Jack of Spades" },
  { rank: "queen", suit: "spades", image: "spades/queen.png", description: "This is a Queen of Spades" },
  { rank: "king", suit: "spades", image: "spades/king.png", description: "This is a King of Spades" },
  { rank: "ace", suit: "spades", image: "spades/ace.png", description: "This is an Ace of Spades" },
  // Clubs (Трефы)
  { rank: "2", suit: "clubs", image: "clubs/2.png", description: "This is a Two of Clubs" },
  { rank: "3", suit: "clubs", image: "clubs/3.png", description: "This is a Three of Clubs" },
  { rank: "4", suit: "clubs", image: "clubs/4.png", description: "This is a Four of Clubs" },
  { rank: "5", suit: "clubs", image: "clubs/5.png", description: "This is a Five of Clubs" },
  { rank: "6", suit: "clubs", image: "clubs/6.png", description: "This is a Six of Clubs" },
  { rank: "7", suit: "clubs", image: "clubs/7.png", description: "This is a Seven of Clubs" },
  { rank: "8", suit: "clubs", image: "clubs/8.png", description: "This is an Eight of Clubs" },
  { rank: "9", suit: "clubs", image: "clubs/9.png", description: "This is a Nine of Clubs" },
  { rank: "10", suit: "clubs", image: "clubs/10.png", description: "This is a Ten of Clubs" },
  { rank: "jack", suit: "clubs", image: "clubs/jack.png", description: "This is a Jack of Clubs" },
  { rank: "queen", suit: "clubs", image: "clubs/queen.png", description: "This is a Queen of Clubs" },
  { rank: "king", suit: "clubs", image: "clubs/king.png", description: "This is a King of Clubs" },
  { rank: "ace", suit: "clubs", image: "clubs/ace.png", description: "This is an Ace of Clubs" },
  // Diamonds (Бубны)
  { rank: "2", suit: "diamonds", image: "diamonds/2.png", description: "This is a Two of Diamonds" },
  { rank: "3", suit: "diamonds", image: "diamonds/3.png", description: "This is a Three of Diamonds" },
  { rank: "4", suit: "diamonds", image: "diamonds/4.png", description: "This is a Four of Diamonds" },
  { rank: "5", suit: "diamonds", image: "diamonds/5.png", description: "This is a Five of Diamonds" },
  { rank: "6", suit: "diamonds", image: "diamonds/6.png", description: "This is a Six of Diamonds" },
  { rank: "7", suit: "diamonds", image: "diamonds/7.png", description: "This is a Seven of Diamonds" },
  { rank: "8", suit: "diamonds", image: "diamonds/8.png", description: "This is an Eight of Diamonds" },
  { rank: "9", suit: "diamonds", image: "diamonds/9.png", description: "This is a Nine of Diamonds" },
  { rank: "10", suit: "diamonds", image: "diamonds/10.png", description: "This is a Ten of Diamonds" },
  { rank: "jack", suit: "diamonds", image: "diamonds/jack.png", description: "This is a Jack of Diamonds" },
  { rank: "queen", suit: "diamonds", image: "diamonds/queen.png", description: "This is a Queen of Diamonds" },
  { rank: "king", suit: "diamonds", image: "diamonds/king.png", description: "This is a King of Diamonds" },
  { rank: "ace", suit: "diamonds", image: "diamonds/ace.png", description: "This is an Ace of Diamonds" },
  // Jokers (Джокеры)
  { rank: "joker-red", suit: "jokers", image: "jokers/joker-red.png", description: "This is a Red Joker" },
  { rank: "joker-black", suit: "jokers", image: "jokers/joker-black.png", description: "This is a Black Joker" },
];

// Сокращения для мастей
const suitShort = {
  spades: "S",
  hearts: "H",
  clubs: "C",
  diamonds: "D",
  jokers: "J"
};

// Цвета для счётчиков мастей (по умолчанию чёрный, кроме червей)
const suitColor = {
  spades: "#000",
  hearts: "#a71515", // красный
  clubs: "#000",
  diamonds: "#a71515", // красный
  "joker-red": "#a71515",
  "joker-black": "#000"
};

// Массив выбранных карт
let selectedCards = [];
// Массив выбранных рангов
let selectedRanks = new Set();
// Фильтрация по мастям
let currentSuit = "all";

// Загрузка сохранённых данных из localStorage при старте
function loadSavedData() {
  const savedCards = localStorage.getItem("selectedCards");
  if (savedCards) {
    selectedCards = JSON.parse(savedCards);
  }
}

// Сохранение данных в localStorage
function saveData() {
  localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
}

// Пример структуры данных, которые придут из базы
// let userCardData = {
//   "2": { hearts: 1, spades: 0, clubs: 2, diamonds: 1 },
//   "3": { hearts: 0, spades: 2, clubs: 1, diamonds: 0 },
//   ...
//   "joker-red": 1,
//   "joker-black": 1
// };
// Позже использовать: userCardData[card.rank][card.suit]

// Функция для отображения карт
function displayCards(filteredCards) {
  const gallery = document.getElementById("card-gallery");
  gallery.innerHTML = ""; // Очищаем галерею

  filteredCards.forEach(card => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    // Добавляем data-атрибуты для идентификации карты
    cardDiv.dataset.rank = card.rank;
    cardDiv.dataset.suit = card.suit;

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = `Card ${card.rank} of ${card.suit}`;
    cardDiv.appendChild(img);

    // Проверяем, выбрана ли карта
    const cardKey = `${card.rank} of ${card.suit}`;
    if (selectedCards.includes(cardKey)) {
      cardDiv.classList.add("selected");
      // Если карта уже выбрана, создаем счетчик
      setTimeout(() => {
        if (!cardDiv.querySelector('.counter')) {
          createCounter(cardDiv);
        }
      }, 0);
    }

    // Добавляем обработчик клика только для создания счетчика
    cardDiv.addEventListener("click", (event) => {
      // Проверяем, не кликнули ли по счетчику
      if (!event.target.closest('.counter')) {
        // Проверяем, есть ли уже счетчик
        if (!cardDiv.querySelector('.counter')) {
          // Добавляем карту в selectedCards если её там нет
          if (!selectedCards.includes(cardKey)) {
            selectedCards.push(cardKey);
            updateSelectedCounter();
            saveData();
            updateSelectedCardsPopup(); // Обновляем попап
          }
          createCounter(cardDiv);
        }
      }
    });

    // Добавляем подпись под картой
    const existingLabel = cardItem.querySelector('.card-label');
    if (existingLabel) existingLabel.remove();

    // Показываем название карты
    const cardLabel = document.createElement("div");
    cardLabel.classList.add("card-label");
    cardLabel.textContent = `${card.rank} of ${card.suit}`;

    // Создаём и добавляем счётчик количества этой конкретной карты
    const countBadge = document.createElement("div");
    countBadge.classList.add("card-count-badge");
    // Заглушка: 1 для всех карт. Позже будет браться из базы данных
    countBadge.textContent = "1"; // ← сюда подставится значение из БД, например: userData[card.rank][card.suit] || 0
    cardItem.appendChild(countBadge);

    // Открываем модальное окно при клике на подпись
    cardLabel.addEventListener("click", (event) => {
      openModal(card.description, event);
    });

    cardItem.appendChild(cardDiv);
    cardItem.appendChild(cardLabel);
    gallery.appendChild(cardItem);
  });
}

// Функция для создания счетчика
function createCounter(cardElement) {
  // Проверяем, есть ли уже счетчик
  if (cardElement.querySelector('.counter')) {
    return;
  }
  const counterHtml = `
    <div class="counter">
      <div class="cross-btn minus">
        <div class="cross vertical"></div>
        <div class="cross horizontal"></div>
      </div>
      <span class="counter-value">1</span>
      <div class="cross-btn plus">
        <div class="cross vertical"></div>
        <div class="cross horizontal"></div>
      </div>
    </div>
  `;
  cardElement.insertAdjacentHTML('beforeend', counterHtml);
  cardElement.classList.add('selected');
  const counter = cardElement.querySelector('.counter');
  const valueElement = counter.querySelector('.counter-value');
  const minusBtn = counter.querySelector('.minus');
  const plusBtn = counter.querySelector('.plus');
  // Обработчики событий для кнопок
  minusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    let value = parseInt(valueElement.textContent);
    if (value > 0) {
      value--;
      valueElement.textContent = value;
      // Обновляем общий счетчик
      updateTotalScore(-1);
      // Если счетчик стал 0, удаляем его и карту из selected
      if (value === 0) {
        setTimeout(() => {
          counter.remove();
          cardElement.classList.remove('selected'); // Возвращаем карту в состояние не выбранности
          // Удаляем карту из selectedCards
          const cardKey = getCardKeyFromElement(cardElement);
          if (cardKey) {
            const index = selectedCards.indexOf(cardKey);
            if (index !== -1) {
              selectedCards.splice(index, 1);
              updateSelectedCounter();
              saveData();
              updateSelectedCardsPopup(); // Обновляем попап
            }
          }
        }, 100);
      }
    }
  });
  plusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    let value = parseInt(valueElement.textContent);
    value++;
    valueElement.textContent = value;
    // Обновляем общий счетчик
    updateTotalScore(1);
  });
}

// Вспомогательная функция для получения ключа карты из элемента
function getCardKeyFromElement(cardElement) {
  const rank = cardElement.dataset.rank;
  const suit = cardElement.dataset.suit;
  if (rank && suit) {
    return `${rank} of ${suit}`;
  }
  return null;
}

// Функция для обновления общего счетчика
function updateTotalScore(change) {
  // Здесь можно добавить логику для общего счетчика, если нужно
  // Пока оставляем пустой, но можно реализовать при необходимости
}

// Функция для обновления попапа с выбранными картами
function updateSelectedCardsPopup() {
  const gallery = document.getElementById("selected-cards-gallery");
  if (!gallery) return;

  // Очищаем галерею
  gallery.innerHTML = "";

  // Отображаем выбранные карты
  selectedCards.forEach((cardKey) => {
    const cardData = cards.find((card) => `${card.rank} of ${card.suit}` === cardKey);
    if (cardData) {
      const cardItem = document.createElement("div");
      cardItem.classList.add("selected-card-item");

      // Изображение карточки
      const img = document.createElement("img");
      img.src = cardData.image;
      img.alt = `Card ${cardData.rank} of ${cardData.suit}`;

      // Название карточки
      const cardName = document.createElement("div");
      cardName.classList.add("selected-card-name");
      cardName.textContent = `${cardData.rank} of ${cardData.suit}`;

      // Крестик для удаления
      const removeButton = document.createElement("span");
      removeButton.classList.add("selected-card-remove");
      removeButton.textContent = "×";
      removeButton.addEventListener("click", () => {
        const index = selectedCards.indexOf(cardKey);
        if (index !== -1) {
          // Удаляем карточку из массива
          selectedCards.splice(index, 1);

          // Находим соответствующую карточку в галерее и удаляем счетчик
          const cardInGallery = document.querySelector(
            `.card[data-rank="${cardData.rank}"][data-suit="${cardData.suit}"]`
          );
          if (cardInGallery) {
            const counter = cardInGallery.querySelector('.counter');
            if (counter) {
              counter.remove();
            }
            cardInGallery.classList.remove("selected");
          }

          // Удаляем карточку из DOM поп-апа
          cardItem.remove();

          // Обновляем счетчик выбранных карт
          updateSelectedCounter();

          // Сохраняем данные
          saveData();
        }
      });

      cardItem.appendChild(img);
      cardItem.appendChild(cardName);
      cardItem.appendChild(removeButton);
      gallery.appendChild(cardItem);
    }
  });
}

// Функция для открытия поп-апа с выбранными картами
function openSelectedCardsPopup() {
  const popup = document.getElementById("selected-cards-popup");
  updateSelectedCardsPopup(); // Обновляем содержимое попапа
  // Показываем поп-ап
  if (popup) {
    popup.style.display = "flex";
  }
}


function applyFilters() {
  let filteredCards = cards;

  document.querySelectorAll("#rank-filters li[data-rank]").forEach(li => {
    const rank = li.getAttribute("data-rank");
    if (rank === "all") return;

    const isActive = selectedRanks.has(rank);

    // Пример данных (позже — из userCardData)
    const counts = { spades: 1, hearts: 1, clubs: 1, diamonds: 1, "joker-red": 1, "joker-black": 1 };
    if (rank === "2") Object.assign(counts, { spades: 0, hearts: 3, clubs: 0, diamonds: 1 });
    if (rank === "ace") Object.assign(counts, { spades: 2, hearts: 0, clubs: 1, diamonds: 0 });
    if (rank === "jokers") Object.assign(counts, { "joker-red": 1, "joker-black": 1 });

    const total = Object.values(counts).reduce((a, b) => a + b, 0);

// Формируем строку с мастями
let suitText = "";
if (rank === "jokers") {
  suitText = `
    <span style="color:${suitColor["joker-red"]}">${counts["joker-red"]}R</span>
    <span style="color:${suitColor["joker-black"]}">${counts["joker-black"]}B</span>
  `.trim();
} else {
  suitText = [
    `<span style="color:${suitColor.spades}">${counts.spades}${suitShort.spades}</span>`,
    `<span style="color:${suitColor.hearts}">${counts.hearts}${suitShort.hearts}</span>`,
    `<span style="color:${suitColor.clubs}">${counts.clubs}${suitShort.clubs}</span>`,
    `<span style="color:${suitColor.diamonds}">${counts.diamonds}${suitShort.diamonds}</span>`
  ].join(" ");
}

    // Словарь названий
    const rankNames = {
      "2": "Two", "3": "Three", "4": "Four", "5": "Five", "6": "Six",
      "7": "Seven", "8": "Eight", "9": "Nine", "10": "Ten",
      jack: "Jack", queen: "Queen", king: "King", ace: "Ace", jokers: "Jokers"
    };
    const rankName = rankNames[rank];

    // Инициализация DOM-структуры при первом запуске
    if (!li.dataset.initialized) {
      li.innerHTML = `
        <span class="suits-count">${suitText}</span>
        <span class="rank-name">${rankName}</span>
        <span class="rank-count">${total}</span>
      `;
      li.dataset.initialized = "true";
    }

    // Обновляем данные
    const suitsCountEl = li.querySelector(".suits-count");
    const rankNameEl = li.querySelector(".rank-name");
    const rankCountEl = li.querySelector(".rank-count");

    if (suitsCountEl) suitsCountEl.innerHTML = suitText;
    if (rankCountEl) rankCountEl.textContent = total;

    // Переключаем класс
    if (isActive) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });

  // Фильтрация карт
  if (selectedRanks.size > 0 && !selectedRanks.has("all")) {
    if (selectedRanks.has("selected")) {
      filteredCards = filteredCards.filter(card =>
        selectedCards.includes(`${card.rank} of ${card.suit}`)
      );
    } else {
      filteredCards = filteredCards.filter(card => {
        const isJoker = card.suit === "jokers";
        return (
          (selectedRanks.has("jokers") && isJoker) ||
          (!isJoker && selectedRanks.has(card.rank))
        );
      });
    }
  }

  displayCards(filteredCards);
}



document.querySelector("#rank-filters").addEventListener("click", (event) => {
  const target = event.target;
  const rankLi = target.closest("li[data-rank]");
  
  if (!rankLi) return;
  
  const rank = rankLi.getAttribute("data-rank");

  if (rank === "all") {
    selectedRanks.clear();
    applyFilters();
    saveData();
    return;
  }

  if (!target.classList.contains("rank-name") && !target.closest(".rank-name")) {
    return;
  }

  if (selectedRanks.has(rank)) {
    selectedRanks.delete(rank);
  } else {
    selectedRanks.add(rank);
  }

  applyFilters();
  saveData();
});


// Функция для отображения выбранных рангов
function updateSelectedRanksDisplay() {
  const container = document.getElementById("selected-ranks-container");
  container.innerHTML = "";

  if (selectedRanks.size === 0 || (selectedRanks.size === 1 && selectedRanks.has("selected"))) {
    container.innerHTML = "<p>No ranks selected</p>";
    return;
  }

  selectedRanks.forEach(rank => {
    if (rank === "selected") return;

    const rankItem = document.createElement("div");
    rankItem.classList.add("selected-rank-item");
    rankItem.textContent = rank;

    const closeButton = document.createElement("span");
    closeButton.classList.add("filter-icon", "active");
    closeButton.textContent = "+";

    rankItem.addEventListener("click", () => {
      selectedRanks.delete(rank);
      updateSelectedRanksDisplay();
      applyFilters();
      saveData();
    });

    rankItem.appendChild(closeButton);
    container.appendChild(rankItem);
  });
}

// Кнопка "Deselect All Cards" в нижней панели
document.getElementById("deselect-all-cards").addEventListener("click", () => {
  selectedCards = []; // Очищаем массив выбранных карт
  document.querySelectorAll(".card.selected").forEach(card => {
    card.classList.remove("selected"); // Убираем класс "selected" со всех карточек
  });
  saveData(); // Сохраняем изменения в localStorage
  updateSelectedCounter(); // Обновляем счетчик (он станет равен 0)
});

// Кнопка "Selected" в нижней панели
document.getElementById("selected-cards-button").addEventListener("click", () => {
  openSelectedCardsPopup();
});

// Функция для открытия поп-апа с выбранными картами
function openSelectedCardsPopup() {
  const popup = document.getElementById("selected-cards-popup");
  const gallery = document.getElementById("selected-cards-gallery");

  // Очищаем галерею
  gallery.innerHTML = "";

  // Отображаем выбранные карты
  selectedCards.forEach((cardKey) => {
    const cardData = cards.find((card) => `${card.rank} of ${card.suit}` === cardKey);
    if (cardData) {
      const cardItem = document.createElement("div");
      cardItem.classList.add("selected-card-item");

      // Изображение карточки
      const img = document.createElement("img");
      img.src = cardData.image;
      img.alt = `Card ${cardData.rank} of ${cardData.suit}`;

      // Название карточки
      const cardName = document.createElement("div");
      cardName.classList.add("selected-card-name");
      cardName.textContent = `${cardData.rank} of ${cardData.suit}`;

      

      // Крестик для удаления
      const removeButton = document.createElement("span");
      removeButton.classList.add("selected-card-remove");
      removeButton.textContent = "×";
      removeButton.addEventListener("click", () => {
        const index = selectedCards.indexOf(cardKey);
        if (index !== -1) {
          // Удаляем карточку из массива
          selectedCards.splice(index, 1);

          // Находим соответствующую карточку в галерее и удаляем класс "selected"
          const cardInGallery = document.querySelector(
            `.card img[alt="Card ${cardData.rank} of ${cardData.suit}"]`
          );
          if (cardInGallery) {
            const cardDiv = cardInGallery.parentElement;
            cardDiv.classList.remove("selected"); // Убираем эффект огонька
          }

          // Удаляем карточку из DOM поп-апа
          cardItem.remove();

          // Обновляем счетчик выбранных карт
          updateSelectedCounter();

          // Сохраняем данные
          saveData();
        }
      });

      cardItem.appendChild(img);
      cardItem.appendChild(cardName);
      cardItem.appendChild(removeButton);
      gallery.appendChild(cardItem);
    }
  });

  // Показываем поп-ап
  popup.style.display = "flex";
}

/// Функция для анимации счетчика выбранных карт для крафта
function animateCounter(element, targetValue, duration = 1000) {
  let start = 0; // Начальное значение
  const stepTime = 100; // Время между шагами (в миллисекундах)
  const steps = Math.ceil(duration / stepTime); // Количество шагов
  const increment = Math.ceil(targetValue / steps); // Шаг увеличения

  const interval = setInterval(() => {
    start += increment;
    if (start >= targetValue) {
      element.textContent = targetValue; // Устанавливаем конечное значение
      clearInterval(interval); // Останавливаем интервал
    } else {
      element.textContent = start; // Обновляем значение счетчика
    }
  }, stepTime);
}

// Обновление функции открытия поп-апа "Craft"
document.getElementById("craft-button").addEventListener("click", () => {
  const craftPopup = document.getElementById("craft-popup");
  const selectedCardsCount = document.getElementById("selected-cards-count");

  // Сначала устанавливаем начальное значение счетчика
  selectedCardsCount.textContent = 0;

  // Показываем поп-ап
  craftPopup.style.display = "flex";

  // Анимируем счетчик
  animateCounter(selectedCardsCount, selectedCards.length);
});

// Закрытие поп-апа "Craft" при нажатии на крестик
document.querySelector("#craft-popup .close-popup").addEventListener("click", () => {
  const craftPopup = document.getElementById("craft-popup");
  craftPopup.style.display = "none"; // Скрываем поп-ап
});

// Закрытие поп-апа "Craft" при клике вне его области
document.getElementById("craft-popup").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    const craftPopup = document.getElementById("craft-popup");
    craftPopup.style.display = "none"; // Скрываем поп-ап
  }
});


// Закрытие поп-апа
document.querySelector("#selected-cards-popup .close-popup").addEventListener("click", () => {
  const popup = document.getElementById("selected-cards-popup");
  popup.style.display = "none";
});

// Функция для обновления счетчика выбранных карт
function updateSelectedCounter() {
  const counter = document.getElementById("selected-counter");
  if (selectedCards.length > 0) {
    counter.textContent = selectedCards.length; // Обновляем значение счетчика
    counter.style.display = "block"; // Показываем счетчик
  } else {
    counter.style.display = "none"; // Скрываем счетчик, если нет выбранных карт
  }
}

// Открытие поп-апа при нажатии на кнопку "Mint"
document.getElementById("mint-button").addEventListener("click", () => {
  const mintPopup = document.getElementById("mint-popup");
  mintPopup.style.display = "flex"; // Показываем поп-ап
});

// Закрытие поп-апа при нажатии на крестик
document.querySelector("#mint-popup .close-popup").addEventListener("click", () => {
  const mintPopup = document.getElementById("mint-popup");
  mintPopup.style.display = "none"; // Скрываем поп-ап
});

// Закрытие поп-апа при клике вне его области
document.getElementById("mint-popup").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    const mintPopup = document.getElementById("mint-popup");
    mintPopup.style.display = "none"; // Скрываем поп-ап
  }
});

// Функция для анимации убывания счетчика оставшихся для минта карт
function startCountdown() {
  const counterElement = document.getElementById('card-counter');
  let count = 52; // Начальное значение (можно загрузить из базы данных)
  
  // Указание значения из базы данных (замените на реальный запрос к БД)
  // Пример: count = await fetchCounterFromDatabase();
  
  const interval = setInterval(() => {
    if (count > 2) { // Уменьшаем до 2 (конечное значение)
      count--;
      counterElement.textContent = count;
    } else {
      clearInterval(interval); // Останавливаем интервал
    }
  }, 60); // Интервал в миллисекундах (скорость анимации)
}

// Функция для обновления таймера
function startTimer(duration, display) {
  let timer = duration, hours, minutes, seconds;
  const interval = setInterval(() => {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration; // Сброс таймера, если он закончился
    }
  }, 1000);
}

// Запуск анимации при открытии поп-апа минта
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('mint-popup');
  popup.style.display = 'flex'; // Показываем поп-ап
  startCountdown(); // Запускаем анимацию счетчика

  // Устанавливаем начальное значение таймера (2 часа 39 минут)
  const duration = 2 * 3600 + 39 * 60; // 2 часа и 39 минут в секундах
  const display = document.getElementById('timer');
  startTimer(duration, display); // Запускаем таймер
});

// Функция для открытия поп-апа Withdraw/Deposit
function openWithdrawDepositPopup(buttonType) {
  const popup = document.getElementById("Withdraw-Deposit-popup");
  popup.style.display = "flex"; // Показываем поп-ап
  const popupBody = popup.querySelector(".popup-body");
  // Создаем содержимое поп-апа
  const popupContent = `
    <div class="popup-title">${buttonType === 'deposit' ? 'Deposit' : 'Withdraw'}</div>
    <div class="form-container">
      <input type="number" class="input-field" placeholder="Enter amount" id="amount-input">
      <div class="action-buttons">
        <button id="${buttonType}-button">${buttonType === 'deposit' ? 'Deposit' : 'Withdraw'}</button>
      </div>
    </div>
  `;
  popupBody.innerHTML = popupContent;

  // Обработчик события для кнопки Deposit или Withdraw
  document.getElementById(`${buttonType}-button`).addEventListener("click", () => {
    const amountInput = document.getElementById("amount-input");
    const amount = parseFloat(amountInput.value);
    if (amount > 0) {
      alert(`${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}: ${amount}`);
      // Здесь можно добавить логику для депозита или вывода средств
    }
  });
}

// Функция для закрытия поп-апа Withdraw/Deposit
function closeWithdrawDepositPopup() {
  const popup = document.getElementById("Withdraw-Deposit-popup");
  popup.style.display = "none"; // Скрываем поп-ап
}

// Обработчик кликов на кнопку Deposit в левой панели
document.getElementById("Withdraw-Deposit-button").addEventListener("click", () => {
  openWithdrawDepositPopup('deposit');
});

// Обработчик кликов на кнопку Withdraw в нижней панели поп-апа для выбранных карт
document.getElementById("Withdraw-Deposit-button-in-craft").addEventListener("click", () => {
  openWithdrawDepositPopup('withdraw');
});

// Закрытие поп-апа Withdraw/Deposit при нажатии на крестик
document.querySelector("#Withdraw-Deposit-popup .close-popup").addEventListener("click", () => {
  closeWithdrawDepositPopup();
});

// Закрытие поп-апа Withdraw/Deposit при клике вне его области
document.getElementById("Withdraw-Deposit-popup").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeWithdrawDepositPopup();
  }
});

// Инициализация страницы
loadSavedData();
applyFilters();
updateSelectedRanksDisplay();
updateSelectedCounter(); // Инициализируем счетчик при загрузке страницы
