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

// Функция для отображения карт
function displayCards(filteredCards) {
  const gallery = document.getElementById("card-gallery");
  gallery.innerHTML = ""; // Очищаем галерею

  filteredCards.forEach(card => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = `Card ${card.rank} of ${card.suit}`;
    cardDiv.appendChild(img);

    // Проверяем, выбрана ли карта
    const cardKey = `${card.rank} of ${card.suit}`;
    if (selectedCards.includes(cardKey)) {
      cardDiv.classList.add("selected"); // Добавляем класс "selected"
    }


    
    // Добавляем обработчик клика для выбора/снятия выбора
    cardDiv.addEventListener("click", () => {
      const cardKey = `${card.rank} of ${card.suit}`;
      const index = selectedCards.indexOf(cardKey);
      if (index === -1) {
        selectedCards.push(cardKey); // Добавляем карту в массив
        cardDiv.classList.add("selected"); // Добавляем класс "selected"
      } else {
        selectedCards.splice(index, 1); // Удаляем карту из массива
        cardDiv.classList.remove("selected"); // Убираем класс "selected"
      }

      updateSelectedCounter(); // Обновляем счетчик
      saveData(); // Сохраняем данные
    });


    // Добавляем подпись под картой
    const cardLabel = document.createElement("div");
    cardLabel.classList.add("card-label");
    cardLabel.textContent = `${card.rank} of ${card.suit}`;

    // Открываем модальное окно при клике на подпись
    cardLabel.addEventListener("click", (event) => {
      openModal(card.description, event);
    });

    cardItem.appendChild(cardDiv);
    cardItem.appendChild(cardLabel);
    gallery.appendChild(cardItem);
  });
}

// Функция для открытия модального окна
function openModal(description, event) {
  const modal = document.getElementById("modal-description");
  const modalText = document.getElementById("modal-text");
  const overlay = document.querySelector(".overlay");

  modalText.textContent = description;

  const clickX = event.pageX;
  const clickY = event.pageY;
  modal.style.left = `${clickX + 10}px`;
  modal.style.top = `${clickY + 10}px`;

  modal.style.display = "block";
  overlay.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  const modal = document.getElementById("modal-description");
  const overlay = document.querySelector(".overlay");

  modal.style.display = "none";
  overlay.style.display = "none";
}

document.querySelector("#modal-description .close-container").addEventListener("click", () => {
  closeModal();
});

// Функция для применения фильтров
function applyFilters() {
  let filteredCards = cards;

  // Фильтрация по рангам
  if (selectedRanks.size > 0) {
    if (selectedRanks.has("selected")) {
      // Если выбран фильтр "Selected", показываем только выбранные карты
      filteredCards = filteredCards.filter(card =>
        selectedCards.includes(`${card.rank} of ${card.suit}`)
      );
    } else {
      // Обработка джокеров и других рангов
      filteredCards = filteredCards.filter(card => {
        const isJoker = card.suit === "jokers"; // Проверка, является ли карта джокером
        return (
          (selectedRanks.has("jokers") && isJoker) || // Показываем джокеров, если они выбраны
          (!isJoker && selectedRanks.has(card.rank)) // Показываем другие карты, если их ранг выбран
        );
      });
    }
  }

  // Фильтрация по мастям
  if (currentSuit !== "all") {
    filteredCards = filteredCards.filter(card => card.suit === currentSuit);
  }

  // Отображаем отфильтрованные карты
  displayCards(filteredCards);
}

// Обработчик кликов на фильтры по рангу
document.querySelector("#rank-filters").addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LI") {
    const rank = target.getAttribute("data-rank");
    if (rank === "all") {
      selectedRanks.clear();
    } else {
      if (selectedRanks.has(rank)) {
        selectedRanks.delete(rank);
      } else {
        selectedRanks.add(rank);
      }
    }
    applyFilters();
    updateSelectedRanksDisplay();
    saveData();
    // Визуальная подсветка активных фильтров
    document.querySelectorAll("#rank-filters li").forEach(item => {
      item.classList.toggle("active", selectedRanks.has(item.getAttribute("data-rank")));
    });
  }
});

// Открытие поп-апа Login/Register
document.getElementById("login-register-button").addEventListener("click", () => {
  const popup = document.getElementById("login-register-popup");
  popup.style.display = "flex"; // Показываем поп-ап
});

// Закрытие поп-апа при нажатии на крестик
document.querySelector("#login-register-popup .close-popup").addEventListener("click", () => {
  const popup = document.getElementById("login-register-popup");
  popup.style.display = "none"; // Скрываем поп-ап
});

// Закрытие поп-апа при клике вне его области
document.getElementById("login-register-popup").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    const popup = document.getElementById("login-register-popup");
    popup.style.display = "none"; // Скрываем поп-ап
  }
});

// Обработка отправки формы
document.getElementById("login-register-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Предотвращаем отправку формы
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Пример обработки данных
  console.log("Username:", username);
  console.log("Password:", password);

  // Закрываем поп-ап после отправки
  const popup = document.getElementById("login-register-popup");
  popup.style.display = "none";

  // Очищаем форму
  event.target.reset();
});

// Обработчик кликов на фильтры по мастям
document.querySelectorAll(".suit-filter-column div").forEach(filter => {
  filter.addEventListener("click", () => {
    const suit = filter.getAttribute("data-suit");

    // Если текущая масть уже выбрана, сбрасываем фильтр на "all"
    if (currentSuit === suit) {
      currentSuit = "all";
      document.querySelectorAll(".suit-filter-column div").forEach(div => {
        div.classList.remove("active"); // Убираем подсветку всех кнопок
      });
    } else {
      // Иначе выбираем новую масть
      currentSuit = suit;
      document.querySelectorAll(".suit-filter-column div").forEach(div => {
        div.classList.remove("active"); // Убираем подсветку всех кнопок
      });
      filter.classList.add("active"); // Подсвечиваем выбранную кнопку
    }

    // Применяем фильтры и сохраняем данные
    applyFilters();
    saveData();
  });
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

/// Функция для анимации счетчика
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

// Получаем ссылки на элементы
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailLabel = document.getElementById("email-label");
const passwordLabel = document.getElementById("password-label");

// Функция для скрытия метки при фокусе
function hideLabel(input, label) {
  input.addEventListener("focus", () => {
    label.style.display = "none"; // Скрываем метку
  });
}

// Функция для показа метки, если поле пустое
function showLabelIfEmpty(input, label) {
  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      label.style.display = "block"; // Показываем метку, если поле пустое
    }
  });
}

// Применяем функции к полям ввода
hideLabel(emailInput, emailLabel);
showLabelIfEmpty(emailInput, emailLabel);

hideLabel(passwordInput, passwordLabel);
showLabelIfEmpty(passwordInput, passwordLabel);

// Пример проверки ввода полей регистрации
document.getElementById("login-register-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Предотвращаем отправку формы

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  console.log("Email:", email);
  console.log("Password:", password);

  // Закрываем поп-ап после отправки
  const popup = document.getElementById("login-register-popup");
  popup.style.display = "none";

  // Очищаем форму
  event.target.reset();
});


// Инициализация страницы
loadSavedData();
applyFilters();
updateSelectedRanksDisplay();
updateSelectedCounter(); // Инициализируем счетчик при загрузке страницы