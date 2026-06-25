const dishes = [
  {
    id: "trout",
    name: "Форель с травами",
    category: "Горячее",
    price: 17.9,
    tag: "Хит",
    description: "Запеченная форель, зеленое масло, молодой картофель и лимон.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "pasta",
    name: "Паста с морепродуктами",
    category: "Горячее",
    price: 15.5,
    tag: "Новое",
    description: "Лингвини, креветки, мидии, томаты черри и белое вино.",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "salad",
    name: "Салат Riverside",
    category: "Салаты",
    price: 10.8,
    tag: "Легкое",
    description: "Романо, авокадо, огурец, семена, сыр и цитрусовая заправка.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "soup",
    name: "Крем-суп из тыквы",
    category: "Супы",
    price: 8.2,
    tag: "Вегетарианское",
    description: "Тыква, кокосовое молоко, имбирь, тыквенные семечки.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "burger",
    name: "Бургер с говядиной",
    category: "Горячее",
    price: 13.7,
    tag: "Сытное",
    description: "Котлета из говядины, чеддер, луковый джем, маринованный огурец.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "cheesecake",
    name: "Чизкейк с ягодами",
    category: "Десерты",
    price: 7.4,
    tag: "Домашнее",
    description: "Сливочный чизкейк, ягодный соус и свежая мята.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "espresso",
    name: "Эспрессо тоник",
    category: "Напитки",
    price: 4.8,
    tag: "Cold",
    description: "Двойной эспрессо, тоник, лед и апельсиновая цедра.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lemonade",
    name: "Домашний лимонад",
    category: "Напитки",
    price: 4.5,
    tag: "Fresh",
    description: "Лимон, лайм, мята, содовая и немного тростникового сахара.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = ["Все", ...new Set(dishes.map((dish) => dish.category))];
const cart = new Map();

const categoryTabs = document.querySelector("#categoryTabs");
const menuGrid = document.querySelector("#menuGrid");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const orderList = document.querySelector("#orderList");
const orderEmpty = document.querySelector("#orderEmpty");
const orderTotal = document.querySelector("#orderTotal");
const clearCart = document.querySelector("#clearCart");
const checkoutButton = document.querySelector("#checkoutButton");
const toast = document.querySelector("#toast");

let activeCategory = "Все";
let toastTimer;

function formatPrice(value) {
  return `${value.toFixed(2)} EUR`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function renderCategories() {
  categoryTabs.innerHTML = categories
    .map((category) => {
      const count =
        category === "Все"
          ? dishes.length
          : dishes.filter((dish) => dish.category === category).length;

      return `
        <button class="tab-button ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
          <strong>${category}</strong>
          <span>${count}</span>
        </button>
      `;
    })
    .join("");
}

function getFilteredDishes() {
  const query = searchInput.value.trim().toLowerCase();

  return dishes.filter((dish) => {
    const categoryMatch = activeCategory === "Все" || dish.category === activeCategory;
    const queryMatch = [dish.name, dish.category, dish.description, dish.tag]
      .join(" ")
      .toLowerCase()
      .includes(query);

    return categoryMatch && queryMatch;
  });
}

function renderMenu() {
  const filteredDishes = getFilteredDishes();
  resultCount.textContent = `${filteredDishes.length} ${getDishWord(filteredDishes.length)}`;

  menuGrid.innerHTML = filteredDishes
    .map(
      (dish) => `
        <article class="dish-card">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
          <div class="dish-body">
            <div class="dish-title">
              <h3>${dish.name}</h3>
              <span class="price">${formatPrice(dish.price)}</span>
            </div>
            <p>${dish.description}</p>
            <div class="dish-meta">
              <span class="badge">${dish.tag}</span>
              <button class="add-button" type="button" data-id="${dish.id}">Добавить</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function getDishWord(count) {
  if (count % 10 === 1 && count % 100 !== 11) return "блюдо";
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return "блюда";
  return "блюд";
}

function addToCart(id) {
  const dish = dishes.find((item) => item.id === id);
  const current = cart.get(id) || { dish, quantity: 0 };
  cart.set(id, { dish, quantity: current.quantity + 1 });
  renderCart();
  showToast(`${dish.name} добавлено`);
}

function updateQuantity(id, delta) {
  const item = cart.get(id);
  if (!item) return;

  const nextQuantity = item.quantity + delta;
  if (nextQuantity <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, { ...item, quantity: nextQuantity });
  }

  renderCart();
}

function renderCart() {
  const items = Array.from(cart.values());
  orderEmpty.hidden = items.length > 0;
  orderList.innerHTML = items
    .map(
      ({ dish, quantity }) => `
        <div class="order-item">
          <div>
            <strong>${dish.name}</strong>
            <span>${quantity} x ${formatPrice(dish.price)}</span>
          </div>
          <div class="quantity" aria-label="Количество ${dish.name}">
            <button type="button" data-action="decrease" data-id="${dish.id}" aria-label="Уменьшить">-</button>
            <strong>${quantity}</strong>
            <button type="button" data-action="increase" data-id="${dish.id}" aria-label="Увеличить">+</button>
          </div>
        </div>
      `,
    )
    .join("");

  const total = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  orderTotal.textContent = formatPrice(total);
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) return;
  addToCart(button.dataset.id);
});

orderList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  updateQuantity(button.dataset.id, button.dataset.action === "increase" ? 1 : -1);
});

searchInput.addEventListener("input", renderMenu);

clearCart.addEventListener("click", () => {
  cart.clear();
  renderCart();
});

checkoutButton.addEventListener("click", () => {
  if (cart.size === 0) {
    showToast("Добавьте блюда перед оформлением");
    return;
  }

  showToast("Заказ собран. Официант подойдет к вам.");
});

renderCategories();
renderMenu();
renderCart();
