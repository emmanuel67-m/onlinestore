
document.addEventListener("DOMContentLoaded", () => {
    // Load products
    const productsGrid = document.getElementById("productsGrid")
    if (productsGrid) {
      productsGrid.innerHTML = products.map((product) => createProductCard(product)).join("")
    }
  
    // Handle search
    const searchInput = document.querySelector(".search-bar input")
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase()
      const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm))
      if (productsGrid) {
        productsGrid.innerHTML = filteredProducts.map((product) => createProductCard(product)).join("")
      }
    })
  
    // Handle cart
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    updateCartCount()
  
    document.addEventListener("click", (e) => {
      if (e.target.closest(".product-card")) {
        const productId = e.target.closest(".product-card").dataset.id
        addToCart(productId)
        showToast("Product added to cart!")
      }
    })
  
    function addToCart(productId) {
      const product = products.find((p) => p.id === Number.parseInt(productId))
      if (product) {
        const existingItem = cart.find((item) => item.id === product.id)
        if (existingItem) {
          existingItem.quantity += 1
        } else {
          cart.push({ ...product, quantity: 1 })
        }
        updateCartCount()
        saveCart()
      }
    }
  
    function updateCartCount() {
      const cartCountElement = document.querySelector(".cart-count")
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
      cartCountElement.textContent = totalItems
    }
  
    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  
    function showToast(message) {
      const toast = document.getElementById("toast")
      toast.textContent = message
      toast.classList.add("show")
      setTimeout(() => {
        toast.classList.remove("show")
      }, 3000)
    }
  
    // Handle account page navigation
    if (window.location.pathname.includes("account.html")) {
      const accountLinks = document.querySelectorAll(".account-sidebar a")
      const accountSections = document.querySelectorAll(".account-section")
  
      accountLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
          const targetId = link.getAttribute("href").slice(1)
  
          accountSections.forEach((section) => {
            section.style.display = section.id === targetId ? "block" : "none"
          })
  
          accountLinks.forEach((l) => l.classList.remove("active"))
          link.classList.add("active")
        })
      })
    }
  
    // Handle active navigation
    const currentPage = window.location.pathname.split("/").pop()
    const navLinks = document.querySelectorAll(".main-nav a")
  
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
  
    // Handle contact form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(contactForm)
        const formObject = Object.fromEntries(formData.entries())
  
        // Here you would typically send the form data to a server
        console.log("Form submitted:", formObject)
  
        // For demonstration, we'll just show a toast notification
        showToast("Thank you for your message. We'll get back to you soon!")
        contactForm.reset()
      })
    }
  
    // Handle shop page functionality
    if (window.location.pathname.includes("shop.html")) {
      const productList = document.getElementById("productList")
      const sortSelect = document.getElementById("sort")
      const applyFiltersBtn = document.getElementById("applyFilters")
      const prevPageBtn = document.getElementById("prevPage")
      const nextPageBtn = document.getElementById("nextPage")
      const currentPageSpan = document.getElementById("currentPage")
  
      let currentPage = 1
      const productsPerPage = 12
      let filteredProducts = [...products]
  
      function renderProducts() {
        const startIndex = (currentPage - 1) * productsPerPage
        const endIndex = startIndex + productsPerPage
        const productsToShow = filteredProducts.slice(startIndex, endIndex)
  
        productList.innerHTML = productsToShow.map((product) => createProductCard(product)).join("")
        currentPageSpan.textContent = `Page ${currentPage}`
        prevPageBtn.disabled = currentPage === 1
        nextPageBtn.disabled = endIndex >= filteredProducts.length
      }
  
      function applyFilters() {
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(
          (input) => input.value,
        )
        const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(
          (input) => input.value,
        )
        const maxPrice = document.getElementById("priceRange").value
  
        filteredProducts = products.filter((product) => {
          const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
          const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color)
          const priceMatch = product.price <= maxPrice
  
          return categoryMatch && colorMatch && priceMatch
        })
  
        currentPage = 1
        renderProducts()
      }
  
      sortSelect.addEventListener("change", () => {
        const sortValue = sortSelect.value
        switch (sortValue) {
          case "price-low-high":
            filteredProducts.sort((a, b) => a.price - b.price)
            break
          case "price-high-low":
            filteredProducts.sort((a, b) => b.price - a.price)
            break
          case "newest":
            filteredProducts.sort((a, b) => b.id - a.id)
            break
          default:
            filteredProducts = [...products]
        }
        renderProducts()
      })
  
      applyFiltersBtn.addEventListener("click", applyFilters)
  
      prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--
          renderProducts()
        }
      })
  
      nextPageBtn.addEventListener("click", () => {
        if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
          currentPage++
          renderProducts()
        }
      })
  
      // Initialize the shop page
      renderProducts()
    }
  
    // Handle blog page functionality
    if (window.location.pathname.includes("blog.html")) {
      const featuredPost = document.querySelector(".featured-post")
      const blogPosts = document.querySelectorAll(".blog-post")
  
      // Add hover effect to featured post
      if (featuredPost) {
        featuredPost.addEventListener("mouseenter", () => {
          featuredPost.style.transform = "scale(1.02)"
          featuredPost.style.transition = "transform 0.3s ease-in-out"
        })
  
        featuredPost.addEventListener("mouseleave", () => {
          featuredPost.style.transform = "scale(1)"
        })
      }
  
      // Add hover effect to blog posts
      blogPosts.forEach((post) => {
        post.addEventListener("mouseenter", () => {
          post.style.transform = "translateY(-5px)"
          post.style.transition = "transform 0.3s ease-in-out"
        })
  
        post.addEventListener("mouseleave", () => {
          post.style.transform = "translateY(0)"
        })
      })
    }
  
    // Handle cart page
    if (window.location.pathname.includes("cart.html")) {
      const cartItemsContainer = document.querySelector(".cart-items")
      const subtotalElement = document.getElementById("subtotal")
      const shippingElement = document.getElementById("shipping")
      const totalElement = document.getElementById("total")
      const checkoutBtn = document.getElementById("checkout-btn")
      const paymentModal = document.getElementById("payment-modal")
      const closeModal = document.querySelector(".close")
      const paymentForm = document.getElementById("payment-form")
      const paymentMethod = document.getElementById("payment-method")
      const cardDetails = document.getElementById("card-details")
      const bankDetails = document.getElementById("bank-details")
  
      function renderCart() {
        cartItemsContainer.innerHTML = cart
          .map(
            (item) => `
                  <div class="cart-item" data-id="${item.id}">
                      <img src="${item.image}" alt="${item.name}">
                      <div class="cart-item-details">
                          <h3 class="cart-item-title">${item.name}</h3>
                          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                          <div class="cart-item-quantity">
                              <button class="decrease-quantity">-</button>
                              <input type="number" value="${item.quantity}" min="1" max="99">
                              <button class="increase-quantity">+</button>
                          </div>
                      </div>
                      <button class="remove-item">Remove</button>
                  </div>
              `,
          )
          .join("")
  
        updateCartSummary()
      }
  
      function updateCartSummary() {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        const shipping = subtotal > 100 ? 0 : 10
        const total = subtotal + shipping
  
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`
        shippingElement.textContent = shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`
        totalElement.textContent = `$${total.toFixed(2)}`
      }
  
      cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("increase-quantity")) {
          const itemId = e.target.closest(".cart-item").dataset.id
          const item = cart.find((i) => i.id === Number.parseInt(itemId))
          item.quantity += 1
          renderCart()
          saveCart()
        } else if (e.target.classList.contains("decrease-quantity")) {
          const itemId = e.target.closest(".cart-item").dataset.id
          const item = cart.find((i) => i.id === Number.parseInt(itemId))
          if (item.quantity > 1) {
            item.quantity -= 1
            renderCart()
            saveCart()
          }
        } else if (e.target.classList.contains("remove-item")) {
          const itemId = e.target.closest(".cart-item").dataset.id
          cart = cart.filter((i) => i.id !== Number.parseInt(itemId))
          renderCart()
          saveCart()
          updateCartCount()
        }
      })
  
      cartItemsContainer.addEventListener("change", (e) => {
        if (e.target.type === "number") {
          const itemId = e.target.closest(".cart-item").dataset.id
          const item = cart.find((i) => i.id === Number.parseInt(itemId))
          item.quantity = Number.parseInt(e.target.value)
          renderCart()
          saveCart()
          updateCartCount()
        }
      })
  
      checkoutBtn.addEventListener("click", () => {
        paymentModal.style.display = "block"
      })
  
      closeModal.addEventListener("click", () => {
        paymentModal.style.display = "none"
      })
  
      paymentMethod.addEventListener("change", () => {
        if (paymentMethod.value === "card") {
          cardDetails.style.display = "block"
          bankDetails.style.display = "none"
        } else if (paymentMethod.value === "bank") {
          cardDetails.style.display = "none"
          bankDetails.style.display = "block"
        } else {
          cardDetails.style.display = "none"
          bankDetails.style.display = "none"
        }
      })
  
      paymentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // Here you would typically send the payment information to a server
        // For this example, we'll just show a success message
        showToast("Payment successful! Thank you for your purchase.")
        paymentModal.style.display = "none"
        cart = []
        saveCart()
        renderCart()
        updateCartCount()
      })
  
      renderCart()
    }
  
    // Add this new section for account button functionality
    const accountBtn = document.getElementById("accountBtn")
    if (accountBtn) {
      accountBtn.addEventListener("click", () => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
          window.location.href = "account.html"
        } else {
          window.location.href = "account.html#login"
        }
      })
    }
  
    // Update the header based on login status
    function updateHeader() {
      const user = JSON.parse(localStorage.getItem("user"))
      const accountBtn = document.getElementById("accountBtn")
      if (accountBtn) {
        accountBtn.textContent = user ? "My Account" : "Login"
      }
    }
  
    // Call updateHeader when the page loads
    updateHeader()
  
    // Handle language change
    handleLanguageChange()
  })
  
  function createProductCard(product) {
    return `
          <div class="product-card" data-id="${product.id}">
              <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
                  <div class="product-tags">
                      ${product.isNew ? '<span class="tag tag-new">New</span>' : ""}
                      ${product.onSale ? '<span class="tag tag-sale">Sale</span>' : ""}
                  </div>
              </div>
              <h3 class="product-title">${product.name}</h3>
              <div class="product-price">
                  <span class="current-price">$${product.price.toFixed(2)}</span>
                  ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ""}
              </div>
              <button class="add-to-cart-btn">Add to Cart</button>
          </div>
      `
  }
  
  function handleLanguageChange() {
    const languageSelect = document.querySelector(".language-select")
    if (languageSelect) {
      languageSelect.addEventListener("change", (e) => {
        const selectedLanguage = e.target.value
        // Here you would typically implement the logic to change the language
        console.log(`Language changed to: ${selectedLanguage}`)
        // For demonstration, we'll just show a toast notification
        showToast(`Language changed to ${selectedLanguage}`)
      })
    }
  }
  
  