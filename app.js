const spriteMap = {
  suplementacion: "assets/sprite-suplementacion.png",
  ropa: "assets/sprite-ropa-deportiva.png",
  musculacion: "assets/sprite-musculacion.png",
};

const categoryLabels = {
  suplementacion: "Suplementacion",
  ropa: "Ropa deportiva",
  musculacion: "Musculacion",
};

const products = [
  {
    id: "sup-whey-isolate",
    category: "suplementacion",
    cell: 0,
    name: "Whey Isolate 2lb",
    price: 59.99,
    tag: "Proteinas",
  },
  {
    id: "sup-pre-workout",
    category: "suplementacion",
    cell: 1,
    name: "Pre-Workout Explosive",
    price: 34.99,
    tag: "Pre-entreno",
  },
  {
    id: "sup-creatina",
    category: "suplementacion",
    cell: 2,
    name: "Creatina Monohidrato",
    price: 24.99,
    tag: "Fuerza",
  },
  {
    id: "sup-bcaa",
    category: "suplementacion",
    cell: 3,
    name: "BCAA 2:1:1",
    price: 29.99,
    tag: "Aminoacidos",
  },
  {
    id: "sup-omega",
    category: "suplementacion",
    cell: 4,
    name: "Omega 3 1000mg",
    price: 19.99,
    tag: "Salud",
  },
  {
    id: "sup-magnesio",
    category: "suplementacion",
    cell: 5,
    name: "Magnesio Recovery",
    price: 21.99,
    tag: "Recuperacion",
  },
  {
    id: "sup-vitamina-d",
    category: "suplementacion",
    cell: 6,
    name: "Vitamina D3",
    price: 16.99,
    tag: "Vitaminas",
  },
  {
    id: "sup-collageno",
    category: "suplementacion",
    cell: 7,
    name: "Collageno Pro",
    price: 27.99,
    tag: "Wellness",
  },
  {
    id: "sup-electrolitos",
    category: "suplementacion",
    cell: 8,
    name: "Electrolitos Endurance",
    price: 18.99,
    tag: "Hidratacion",
  },
  {
    id: "sup-shaker",
    category: "suplementacion",
    cell: 9,
    name: "Shaker Acero Black",
    price: 14.99,
    tag: "Accesorios",
  },
  {
    id: "ropa-camiseta",
    category: "ropa",
    cell: 0,
    name: "Camiseta Dry Fit Negra",
    price: 24.99,
    tag: "Camisetas",
  },
  {
    id: "ropa-leggings",
    category: "ropa",
    cell: 1,
    name: "Leggings Compression",
    price: 39.99,
    tag: "Pantalones",
  },
  {
    id: "ropa-short",
    category: "ropa",
    cell: 2,
    name: "Short Entrenamiento",
    price: 22.99,
    tag: "Shorts",
  },
  {
    id: "ropa-top",
    category: "ropa",
    cell: 3,
    name: "Top Deportivo Coral",
    price: 29.99,
    tag: "Training",
  },
  {
    id: "ropa-hoodie",
    category: "ropa",
    cell: 4,
    name: "Hoodie Performance Gris",
    price: 44.99,
    tag: "Sudaderas",
  },
  {
    id: "ropa-chaqueta",
    category: "ropa",
    cell: 5,
    name: "Chaqueta Track Azul",
    price: 54.99,
    tag: "Exterior",
  },
  {
    id: "ropa-jogger",
    category: "ropa",
    cell: 6,
    name: "Jogger Performance",
    price: 39.99,
    tag: "Pantalones",
  },
  {
    id: "ropa-calcetines",
    category: "ropa",
    cell: 7,
    name: "Calcetines Tecnicos Pack",
    price: 12.99,
    tag: "Accesorios",
  },
  {
    id: "ropa-guantes",
    category: "ropa",
    cell: 8,
    name: "Guantes Training Pro",
    price: 18.99,
    tag: "Accesorios",
  },
  {
    id: "ropa-gorra",
    category: "ropa",
    cell: 9,
    name: "Gorra Running Black",
    price: 17.99,
    tag: "Accesorios",
  },
  {
    id: "mus-mancuernas",
    category: "musculacion",
    cell: 0,
    name: "Mancuernas Ajustables 32kg",
    price: 219.99,
    tag: "Pesas",
  },
  {
    id: "mus-kettlebell",
    category: "musculacion",
    cell: 1,
    name: "Kettlebell 24kg",
    price: 74.99,
    tag: "Fuerza",
  },
  {
    id: "mus-discos",
    category: "musculacion",
    cell: 2,
    name: "Discos Bumper Set 100kg",
    price: 399.99,
    tag: "Barras",
  },
  {
    id: "mus-barra",
    category: "musculacion",
    cell: 3,
    name: "Barra Olimpica 20kg",
    price: 149.99,
    tag: "Barras",
  },
  {
    id: "mus-bandas",
    category: "musculacion",
    cell: 4,
    name: "Bandas Resistencia Pro",
    price: 32.99,
    tag: "Movilidad",
  },
  {
    id: "mus-dominadas",
    category: "musculacion",
    cell: 5,
    name: "Barra Dominadas Wall",
    price: 89.99,
    tag: "Calistenia",
  },
  {
    id: "mus-cinturon",
    category: "musculacion",
    cell: 6,
    name: "Cinturon Halterofilia",
    price: 49.99,
    tag: "Proteccion",
  },
  {
    id: "mus-medicine",
    category: "musculacion",
    cell: 7,
    name: "Medicine Ball 8kg",
    price: 41.99,
    tag: "Core",
  },
  {
    id: "mus-banco",
    category: "musculacion",
    cell: 8,
    name: "Banco Ajustable Pro",
    price: 199.99,
    tag: "Bancos",
  },
  {
    id: "mus-comba",
    category: "musculacion",
    cell: 9,
    name: "Comba Speed Rope",
    price: 15.99,
    tag: "Cardio",
  },
];

const state = {
  selectedCategories: new Set(["suplementacion", "ropa", "musculacion"]),
  search: "",
  maxPrice: 800,
  sort: "featured",
  cart: new Map(),
};

const elements = {
  body: document.body,
  productGrid: document.querySelector("#productGrid"),
  productSummary: document.querySelector("#productSummary"),
  categoryFilters: document.querySelector("#categoryFilters"),
  clearFilters: document.querySelector("#clearFilters"),
  searchInput: document.querySelector("#searchInput"),
  priceRange: document.querySelector("#priceRange"),
  priceRangeValue: document.querySelector("#priceRangeValue"),
  sortSelect: document.querySelector("#sortSelect"),
  tabs: [...document.querySelectorAll("[data-category-tab]")],
  navLinks: [...document.querySelectorAll("[data-nav-category]")],
  openCart: document.querySelector("#openCart"),
  closeCart: document.querySelector("#closeCart"),
  drawer: document.querySelector("#cartDrawer"),
  backdrop: document.querySelector("#drawerBackdrop"),
  cartCount: document.querySelector("#cartCount"),
  cartItems: document.querySelector("#cartItems"),
  cartSubtotal: document.querySelector("#cartSubtotal"),
  cartTotal: document.querySelector("#cartTotal"),
  checkoutButton: document.querySelector("#checkoutButton"),
  payNowButton: document.querySelector("#payNowButton"),
  paymentForm: document.querySelector("#paymentForm"),
  paymentNote: document.querySelector("#paymentNote"),
  navToggle: document.querySelector(".nav-toggle"),
  toast: document.querySelector("#toast"),
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

let toastTimer;

function formatPrice(value) {
  return currency.format(value);
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function cellPosition(cell) {
  const col = cell % 5;
  const row = Math.floor(cell / 5);
  return {
    x: `${col * 25}%`,
    y: `${row * 100}%`,
  };
}

function applyProductVisual(element, category, cell) {
  const { x, y } = cellPosition(cell);
  element.style.backgroundImage = `url("${spriteMap[category]}")`;
  element.style.setProperty("--pos-x", x);
  element.style.setProperty("--pos-y", y);
}

function applyStaticVisuals() {
  document.querySelectorAll(".product-visual[data-sprite]").forEach((element) => {
    const sprite = element.dataset.sprite;
    const category = sprite === "suplementacion" || sprite === "ropa" || sprite === "musculacion" ? sprite : "suplementacion";
    const cell = Number(element.dataset.cell || 0);
    applyProductVisual(element, category, cell);
  });
}

function renderCategoryFilters() {
  const counts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  elements.categoryFilters.innerHTML = Object.entries(categoryLabels)
    .map(([category, label]) => {
      const checked = state.selectedCategories.has(category) ? "checked" : "";
      return `
        <label class="filter-option">
          <span>
            <input type="checkbox" value="${category}" ${checked}>
            ${label}
          </span>
          <strong>${counts[category]}</strong>
        </label>
      `;
    })
    .join("");
}

function selectedLabel() {
  const count = state.selectedCategories.size;
  if (count === 3) return "Todo";
  if (count === 0) return "Sin categorias";
  if (count === 1) return categoryLabels[[...state.selectedCategories][0]];
  return `${count} categorias`;
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.selectedCategories.has(product.category);
    const matchesSearch = !query || `${product.name} ${product.tag} ${categoryLabels[product.category]}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch && product.price <= state.maxPrice;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "price-low") return a.price - b.price;
    if (state.sort === "price-high") return b.price - a.price;
    if (state.sort === "name") return a.name.localeCompare(b.name);
    return products.indexOf(a) - products.indexOf(b);
  });
}

function renderTabs() {
  const allSelected = state.selectedCategories.size === Object.keys(categoryLabels).length;
  elements.tabs.forEach((button) => {
    const category = button.dataset.categoryTab;
    const active = category === "all" ? allSelected : state.selectedCategories.size === 1 && state.selectedCategories.has(category);
    button.classList.toggle("is-active", active);
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  elements.productSummary.textContent = `Mostrando ${filtered.length} productos | ${selectedLabel()}`;

  if (!filtered.length) {
    elements.productGrid.innerHTML = `
      <div class="empty-state">
        No hay productos con esos filtros. Ajusta la busqueda o amplia el rango de precio.
      </div>
    `;
    renderTabs();
    return;
  }

  elements.productGrid.innerHTML = filtered
    .map((product) => {
      const { x, y } = cellPosition(product.cell);
      return `
        <article class="product-card">
          <div
            class="product-visual"
            role="img"
            aria-label="${product.name}"
            style="background-image: url('${spriteMap[product.category]}'); --pos-x: ${x}; --pos-y: ${y};"
          ></div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-meta">
              <span class="product-tag">${categoryLabels[product.category]}</span>
              <span class="product-tag">${product.tag}</span>
            </div>
          </div>
          <div class="product-bottom">
            <span class="product-price">${formatPrice(product.price)}</span>
            <button type="button" data-add-product="${product.id}">Anadir</button>
          </div>
        </article>
      `;
    })
    .join("");

  renderTabs();
}

function renderAll() {
  renderCategoryFilters();
  renderProducts();
  renderCart();
}

function cartTotals() {
  let quantity = 0;
  let subtotal = 0;

  state.cart.forEach((itemQuantity, productId) => {
    const product = getProduct(productId);
    if (!product) return;
    quantity += itemQuantity;
    subtotal += product.price * itemQuantity;
  });

  return { quantity, subtotal, total: subtotal };
}

function renderCart() {
  const { quantity, subtotal, total } = cartTotals();
  elements.cartCount.textContent = quantity;
  elements.cartSubtotal.textContent = formatPrice(subtotal);
  elements.cartTotal.textContent = formatPrice(total);
  elements.payNowButton.textContent = `Pagar ${formatPrice(total)}`;
  elements.checkoutButton.disabled = quantity === 0;
  elements.payNowButton.disabled = quantity === 0;

  if (quantity === 0) {
    elements.cartItems.innerHTML = `
      <div class="empty-state">
        Tu carrito esta vacio. Anade productos del catalogo para activar el pago.
      </div>
    `;
    return;
  }

  elements.cartItems.innerHTML = [...state.cart.entries()]
    .map(([productId, itemQuantity]) => {
      const product = getProduct(productId);
      const { x, y } = cellPosition(product.cell);
      return `
        <div class="cart-item">
          <div
            class="product-visual"
            role="img"
            aria-label="${product.name}"
            style="background-image: url('${spriteMap[product.category]}'); --pos-x: ${x}; --pos-y: ${y};"
          ></div>
          <div>
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)} | ${categoryLabels[product.category]}</p>
            <div class="cart-item-actions" aria-label="Cantidad de ${product.name}">
              <button class="qty-button" type="button" data-decrease-product="${product.id}" aria-label="Reducir">-</button>
              <span class="cart-qty">${itemQuantity}</span>
              <button class="qty-button" type="button" data-increase-product="${product.id}" aria-label="Aumentar">+</button>
              <button class="qty-button" type="button" data-remove-product="${product.id}" aria-label="Eliminar">x</button>
            </div>
          </div>
          <strong class="cart-line-total">${formatPrice(product.price * itemQuantity)}</strong>
        </div>
      `;
    })
    .join("");
}

function setSingleCategory(category) {
  state.selectedCategories = category === "all"
    ? new Set(Object.keys(categoryLabels))
    : new Set([category]);
  renderAll();
}

function addToCart(productId) {
  const current = state.cart.get(productId) || 0;
  state.cart.set(productId, current + 1);
  renderCart();
  showToast(`${getProduct(productId).name} anadido al carrito`);
}

function updateCartQuantity(productId, nextQuantity) {
  if (nextQuantity <= 0) {
    state.cart.delete(productId);
  } else {
    state.cart.set(productId, nextQuantity);
  }
  renderCart();
}

function openCart() {
  elements.backdrop.hidden = false;
  elements.body.classList.add("drawer-open");
  elements.drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  elements.body.classList.remove("drawer-open");
  elements.drawer.setAttribute("aria-hidden", "true");
  elements.backdrop.hidden = true;
}

function openCheckout() {
  openCart();
  elements.paymentForm.scrollIntoView({ block: "end", behavior: "smooth" });
}

function toggleNav(forceOpen) {
  const nextOpen = typeof forceOpen === "boolean" ? forceOpen : !elements.body.classList.contains("is-nav-open");
  elements.body.classList.toggle("is-nav-open", nextOpen);
  elements.navToggle.setAttribute("aria-expanded", String(nextOpen));
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2400);
}

function bindEvents() {
  elements.productGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-product]");
    if (!addButton) return;
    addToCart(addButton.dataset.addProduct);
  });

  elements.categoryFilters.addEventListener("change", (event) => {
    if (!event.target.matches("input[type='checkbox']")) return;
    const category = event.target.value;
    if (event.target.checked) {
      state.selectedCategories.add(category);
    } else {
      state.selectedCategories.delete(category);
    }
    renderProducts();
  });

  elements.clearFilters.addEventListener("click", () => {
    state.selectedCategories = new Set(Object.keys(categoryLabels));
    state.search = "";
    state.maxPrice = 800;
    state.sort = "featured";
    elements.searchInput.value = "";
    elements.priceRange.value = "800";
    elements.priceRangeValue.textContent = "$800";
    elements.sortSelect.value = "featured";
    renderAll();
  });

  elements.tabs.forEach((button) => {
    button.addEventListener("click", () => setSingleCategory(button.dataset.categoryTab));
  });

  elements.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setSingleCategory(link.dataset.navCategory);
      toggleNav(false);
    });
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });

  elements.priceRange.addEventListener("input", (event) => {
    state.maxPrice = Number(event.target.value);
    elements.priceRangeValue.textContent = `$${state.maxPrice}`;
    renderProducts();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });

  elements.openCart.addEventListener("click", openCart);
  elements.closeCart.addEventListener("click", closeCart);
  elements.backdrop.addEventListener("click", closeCart);
  elements.checkoutButton.addEventListener("click", openCheckout);
  document.querySelectorAll("[data-open-checkout]").forEach((button) => button.addEventListener("click", openCheckout));

  elements.cartItems.addEventListener("click", (event) => {
    const increaseButton = event.target.closest("[data-increase-product]");
    const decreaseButton = event.target.closest("[data-decrease-product]");
    const removeButton = event.target.closest("[data-remove-product]");

    if (increaseButton) {
      const id = increaseButton.dataset.increaseProduct;
      updateCartQuantity(id, (state.cart.get(id) || 0) + 1);
    }

    if (decreaseButton) {
      const id = decreaseButton.dataset.decreaseProduct;
      updateCartQuantity(id, (state.cart.get(id) || 0) - 1);
    }

    if (removeButton) {
      updateCartQuantity(removeButton.dataset.removeProduct, 0);
    }
  });

  elements.paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { quantity } = cartTotals();
    if (!quantity) {
      showToast("Anade productos antes de pagar");
      return;
    }
    state.cart.clear();
    renderCart();
    elements.paymentNote.textContent = "Pedido demo confirmado por Pasarela Sartan Dynamics LLC.";
    showToast("Pedido demo confirmado por Pasarela Sartan Dynamics LLC");
  });

  elements.navToggle.addEventListener("click", () => toggleNav());

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
      toggleNav(false);
    }
  });
}

applyStaticVisuals();
renderAll();
bindEvents();
