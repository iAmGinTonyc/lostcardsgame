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

// === ВРЕМЕННАЯ БАЗА ДАННЫХ: количество каждой карты ===
// Позже заменим на данные с сервера
const userCardData = {
  // Hearts
  "2": { hearts: 3, spades: 0, clubs: 0, diamonds: 1 },
  "3": { hearts: 1, spades: 2, clubs: 1, diamonds: 2 },
  "4": { hearts: 2, spades: 1, clubs: 3, diamonds: 1 },
  "5": { hearts: 1, spades: 1, clubs: 1, diamonds: 1 },
  "6": { hearts: 2, spades: 2, clubs: 2, diamonds: 2 },
  "7": { hearts: 1, spades: 3, clubs: 1, diamonds: 1 },
  "8": { hearts: 1, spades: 1, clubs: 1, diamonds: 3 },
  "9": { hearts: 2, spades: 2, clubs: 2, diamonds: 2 },
  "10": { hearts: 1, spades: 1, clubs: 1, diamonds: 1 },
  jack: { hearts: 3, spades: 1, clubs: 0, diamonds: 2 },
  queen: { hearts: 1, spades: 2, clubs: 2, diamonds: 1 },
  king: { hearts: 2, spades: 1, clubs: 1, diamonds: 3 },
  ace: { hearts: 0, spades: 2, clubs: 1, diamonds: 1 },
  // Jokers
  "joker-red": 1,
  "joker-black": 2
};
// === КОНЕЦ БАЗЫ ДАННЫХ ===

const suitShort = {
  hearts: "♥",
  spades: "♠",
  clubs: "♣",
  diamonds: "♦",
  jokers: "J"
};

const suitColor = {
  spades: "#000",           // чёрный
  hearts: "#a71515",        // красный
  clubs: "#015301",         // зелёный
  diamonds: "#1550a7",      // синий
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
    cardDiv.dataset.rank = card.rank;
    cardDiv.dataset.suit = card.suit;

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = `Card ${card.rank} of ${card.suit}`;
    cardDiv.appendChild(img);

    // Получаем максимальное количество этой карты
    const maxAmount = getMaxCardCount(card.rank, card.suit);

    // === Оверлей "BUY", если количество = 0 ===
    if (maxAmount === 0) {
      const overlay = document.createElement("div");
      overlay.classList.add("card-overlay-buy");
      overlay.textContent = "BUY";
      cardDiv.appendChild(overlay);

      // Показываем при наведении
      cardDiv.addEventListener("mouseenter", () => {
        overlay.classList.add("active");
      });
      cardDiv.addEventListener("mouseleave", () => {
        overlay.classList.remove("active");
      });

      // Переход по клику (если не по счётчику)
      cardDiv.addEventListener("click", (e) => {
        if (!e.target.closest('.counter')) {
          window.open('https://magiceden.io/', '_blank');
        }
      });
    }

    // Проверяем, выбрана ли карта
    const cardKey = `${card.rank} of ${card.suit}`;
    if (selectedCards.includes(cardKey)) {
      cardDiv.classList.add("selected");
      // Отложенное создание счётчика
      setTimeout(() => {
        if (!cardDiv.querySelector('.counter')) {
          createCounter(cardDiv, maxAmount);
        }
      }, 0);
    }

    // Обработчик клика для выбора и создания счётчика
    cardDiv.addEventListener("click", (event) => {
      if (event.target.closest('.counter') || maxAmount === 0) return;

      if (!cardDiv.querySelector('.counter')) {
        if (!selectedCards.includes(cardKey)) {
          selectedCards.push(cardKey);
          updateSelectedCounter();
          saveData();
          updateSelectedCardsPopup();
        }
        createCounter(cardDiv, maxAmount);
        cardDiv.classList.add("selected");
      }
    });

    // === КОНТЕЙНЕР ДЛЯ ПОДПИСИ И СЧЁТЧИКА ===
    const labelContainer = document.createElement("div");
    labelContainer.classList.add("card-label-container");

    const cardLabel = document.createElement("div");
    cardLabel.classList.add("card-label");
    cardLabel.textContent = `${card.rank} of ${card.suit}`;

    cardLabel.addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(card.description, event);
    });

    const countBadge = document.createElement("div");
    countBadge.classList.add("card-count-badge");
    countBadge.textContent = `х${maxAmount}`; // Правильное количество

    labelContainer.appendChild(cardLabel);
    labelContainer.appendChild(countBadge);
    // =====================================

    cardItem.appendChild(cardDiv);
    cardItem.appendChild(labelContainer);
    gallery.appendChild(cardItem);
  });
}

function createCounter(cardElement, maxAmount = 1) {
  if (cardElement.querySelector('.counter')) return;

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

  // Блокируем +, если уже максимум
  function updatePlusButton() {
    const value = parseInt(valueElement.textContent);
    plusBtn.style.opacity = value >= maxAmount ? '0.5' : '1';
    plusBtn.style.cursor = value >= maxAmount ? 'not-allowed' : 'pointer';
  }

  updatePlusButton();

  minusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    let value = parseInt(valueElement.textContent);
    if (value > 0) {
      value--;
      valueElement.textContent = value;
      updateTotalScore(-1);
      updateSelectedCounter(); // ← ДОБАВИЛ: обновляем общий счётчик
      updatePlusButton();
  
      if (value === 0) {
        setTimeout(() => {
          counter.remove();
          cardElement.classList.remove('selected');
          const cardKey = getCardKeyFromElement(cardElement);
          const index = selectedCards.indexOf(cardKey);
          if (index !== -1) {
            selectedCards.splice(index, 1);
            saveData();
            updateSelectedCardsPopup();
          }
          updateSelectedCounter(); // ← всё равно нужно (на случай, если удалили последнюю)
        }, 100);
      }
    }
  });

  plusBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    let value = parseInt(valueElement.textContent);
    if (value < maxAmount) {
      value++;
      valueElement.textContent = value;
      updateTotalScore(1);
      updateSelectedCounter(); // ← ДОБАВИЛ: обновляем общий счётчик
      updatePlusButton();
    }
  });
}

// Получаем максимальное количество карты (из userCardData)
function getMaxCardCount(rank, suit) {
  if (rank === "joker-red" || rank === "joker-black") {
    return userCardData[rank] || 0;
  }
  return userCardData[rank]?.[suit] || 0;
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

function updateSelectedCardsPopup() {
  const gallery = document.getElementById("selected-cards-gallery");
  if (!gallery) return;

  gallery.innerHTML = "";

  selectedCards.forEach((cardKey) => {
    const cardData = cards.find((card) => `${card.rank} of ${card.suit}` === cardKey);
    if (!cardData) return;

    const cardItem = document.createElement("div");
    cardItem.classList.add("selected-card-item");

    // Изображение
    const img = document.createElement("img");
    img.src = cardData.image;
    img.alt = cardKey;

    // Контейнер для имени и счётчика
    const nameContainer = document.createElement("div");
    nameContainer.style.display = "flex";
    nameContainer.style.alignItems = "center";
    nameContainer.style.gap = "8px";
    nameContainer.style.flexGrow = "1";

    // Название
    const cardName = document.createElement("div");
    cardName.classList.add("selected-card-name");
    cardName.textContent = `${cardData.rank} of ${cardData.suit}`;

    // Счётчик количества штук — как в главной галерее
    const countBadge = document.createElement("div");
    countBadge.classList.add("card-count-badge"); // ← используем тот же класс
    countBadge.style.margin = "0"; // убираем лишние отступы, если нужно

    // Получаем реальное количество из счётчика на карте
    const cardElement = document.querySelector(`.card[data-rank="${cardData.rank}"][data-suit="${cardData.suit}"]`);
    const valueEl = cardElement?.querySelector('.counter-value');
    const count = valueEl ? parseInt(valueEl.textContent) : 1;
    countBadge.textContent = `x${count}`;

    nameContainer.appendChild(cardName);
    nameContainer.appendChild(countBadge);

    // Крестик удаления
    const removeButton = document.createElement("span");
    removeButton.classList.add("selected-card-remove");
    removeButton.textContent = "×";
    removeButton.addEventListener("click", () => {
      const index = selectedCards.indexOf(cardKey);
      if (index !== -1) {
        selectedCards.splice(index, 1);
      }

      const cardInGallery = document.querySelector(`.card[data-rank="${cardData.rank}"][data-suit="${cardData.suit}"]`);
      if (cardInGallery) {
        const counter = cardInGallery.querySelector('.counter');
        if (counter) counter.remove();
        cardInGallery.classList.remove("selected");
      }

      updateSelectedCounter();
      updateSelectedCardsPopup();
      saveData();
    });

    // Собираем карточку
    cardItem.appendChild(img);
    cardItem.appendChild(nameContainer);   // ← счётчик внутри, рядом с названием
    cardItem.appendChild(removeButton);
    gallery.appendChild(cardItem);
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

// Получаем количество карт по масти для текущего ранга
function getRankCounts(rank) {
  const counts = { spades: 0, hearts: 0, clubs: 0, diamonds: 0, "joker-red": 0, "joker-black": 0 };

  if (rank === "jokers") {
    counts["joker-red"] = userCardData["joker-red"] || 0;
    counts["joker-black"] = userCardData["joker-black"] || 0;
  } else {
    const data = userCardData[rank];
    if (data) {
      counts.spades = data.spades || 0;
      counts.hearts = data.hearts || 0;
      counts.clubs = data.clubs || 0;
      counts.diamonds = data.diamonds || 0;
    }
  }

  return counts;
}

// Внутри applyFilters(), замени блок с counts на:
const counts = getRankCounts(rank);
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
    `<span style="color:${suitColor.hearts}">${counts.hearts}♥</span>`,
    `<span style="color:${suitColor.spades}">${counts.spades}♠</span>`,
    `<span style="color:${suitColor.clubs}">${counts.clubs}♣</span>`,
    `<span style="color:${suitColor.diamonds}">${counts.diamonds}♦</span>`
  ].join(" ");
}

    // Словарь названий
    const rankNames = {
      "2": "TWOs", "3": "THREEs", "4": "FOURs", "5": "FIVEs", "6": "SIXs",
      "7": "SEVENs", "8": "EIGHTs", "9": "NINEs", "10": "TENs",
      jack: "JACKs", queen: "QUEENs", king: "KINGs", ace: "ACEs", jokers: "JOKERs"
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
    if (rankCountEl) rankCountEl.innerHTML = `Total ${total}`;

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

document.getElementById("deselect-all-cards").addEventListener("click", () => {
  selectedCards = []; // Очищаем выбранные

  document.querySelectorAll(".card.selected").forEach(card => {
    card.classList.remove("selected"); // Убираем стиль
    const counter = card.querySelector('.counter');
    if (counter) {
      counter.remove(); // Удаляем счётчик
    }
  });

  saveData();
  updateSelectedCounter();
  updateSelectedCardsPopup(); // Обновляем поп-ап
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

  // Считаем общее количество выбранных штук
  let total = 0;
  selectedCards.forEach((cardKey) => {
    const cardData = cards.find((card) => `${card.rank} of ${card.suit}` === cardKey);
    if (cardData) {
      const cardElement = document.querySelector(`.card[data-rank="${cardData.rank}"][data-suit="${cardData.suit}"]`);
      const counterValueEl = cardElement?.querySelector('.counter-value');
      const count = counterValueEl ? parseInt(counterValueEl.textContent) : 1;
      total += count;
    }
  });

  if (total > 0) {
    counter.textContent = total;
    counter.style.display = "block";
  } else {
    counter.style.display = "none";
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
  popup.style.display = "flex";
  const popupBody = popup.querySelector(".popup-body");

  // Формируем содержимое
  let popupContent = `
    <div class="popup-title">${buttonType === 'deposit' ? 'Deposit' : 'Withdraw'}</div>
    <div class="form-container">
  `;

  if (buttonType === 'deposit') {
    popupContent += `
      <!-- Заглушка QR-кода -->
      <img src="MyQRCodeForDeposit.jpeg" alt="QR Code for Deposit" class="qr-code-image" style="width: 200px; height: 200px; margin: 20px auto; display: block;">
      <!-- TODO: Добавить динамическую генерацию QR-кода по адресу кошелька -->
      <!-- Можно использовать библиотеку, например, qrcode.js -->
    `;
  } else {
    popupContent += `
      <input type="number" class="input-field" placeholder="Enter amount" id="amount-input">
      <div class="action-buttons">
        <button id="withdraw-button">Withdraw</button>
      </div>
    `;
  }

  popupContent += `</div>`;
  popupBody.innerHTML = popupContent;

  // Только для Withdraw — добавляем обработчик
  if (buttonType === 'withdraw') {
    document.getElementById("withdraw-button").addEventListener("click", () => {
      const amountInput = document.getElementById("amount-input");
      const amount = parseFloat(amountInput.value);
      if (amount > 0) {
        alert(`Withdraw: ${amount}`);
        // TODO: Реализовать логику вывода средств
        closeWithdrawDepositPopup();
      }
    });
  }
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
