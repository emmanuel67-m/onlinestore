const products = [
    {
      id: 1,
      name: "Nike SB50 Portable Wireless",
      price: 84.0,
      originalPrice: 95.0,
      image:
        "https://img.kwcdn.com/product/fancy/825189c8-9b10-4d51-8d3a-92c24e91314c.jpg?imageView2/2/w/800/q/70/format/webp",
      isNew: true,
      onSale: true,
    },
    {
      id: 2,
      name: "Nike Steel Int Hybrid",
      price: 95.0,
      image:
        "https://i.pinimg.com/474x/c3/76/05/c37605841898a332c5b86bec3d73fba7.jpg",
      isNew: true,
    },
    {
      id: 3,
      name: "BH Fit 3 Portable",
      price: 200.0,
      image:
        "https://i.pinimg.com/474x/75/1c/cb/751ccb13ec5856afacbebd629d936b33.jpg",
      isNew: true,
    },
    {
      id: 4,
      name: "Apple Watch Series 7",
      price: 399.0,
      originalPrice: 429.0,
      image:
        "https://i.pinimg.com/474x/49/1a/e5/491ae57e37ef20b6ebb92c4e31c119d9.jpg",
      isNew: false,
      onSale: true,
    },
    {
      id: 5,
      name: "Samsung Galaxy Buds Pro",
      price: 199.0,
      image:
        "https://i.pinimg.com/474x/c6/b8/57/c6b85740632554f0be83625a4abaac10.jpg",
      isNew: false,
      onSale: false,
    },
    {
      id: 6,
      name: "Sony WH-1000XM4 Headphones",
      price: 350.0,
      originalPrice: 399.0,
      image:
        "https://i.pinimg.com/474x/9a/b6/ae/9ab6ae6fcc7847f2f76bbfc2ba097104.jpg",
      isNew: false,
      onSale: true,
    },
    {
      id: 7,
      name: "GoPro HERO9 Black",
      price: 449.0,
      image:
        "https://i.pinimg.com/474x/ba/6e/e0/ba6ee09a3bbccef20b9bf4b2f8ad779e.jpg",
      isNew: true,
      onSale: false,
    },
    {
      id: 8,
      name: "DJI Mavic Air 2",
      price: 799.0,
      image:
        "https://i.pinimg.com/474x/f0/3c/bb/f03cbb074711c8012d27652b2cd90319.jpg",
      isNew: false,
      onSale: true,
    },
    {
      id: 9,
      name: "Bose SoundLink Revolve+",
      price: 349.0,
      image:
        "https://i.pinimg.com/474x/d6/dc/98/d6dc98486f0638897a41cc362e6f0e4b.jpg",
      isNew: true,
      onSale: false,
    },
    {
      id: 10,
      name: "Google Pixel 5",
      price: 699.0,
      originalPrice: 799.0,
      image:
        "https://i.pinimg.com/474x/22/52/8a/22528a82cbd33707eb450e23b0d87154.jpg",
      isNew: false,
      onSale: true,
    },
    {
      id: 11,
      name: "Microsoft Surface Pro 7",
      price: 749.0,
      image:
        "https://i.pinimg.com/474x/61/df/0e/61df0e5146361f610a59ef8df302ee9f.jpg",
      isNew: false,
      onSale: false,
    },
    {
      id: 12,
      name: "Logitech MX Master 3 Mouse",
      price: 99.0,
      image:
        "https://i.pinimg.com/736x/7c/ef/4e/7cef4e0ea94ab92a3c3c62cf65b89b3c.jpg",
      isNew: true,
      onSale: false,
    },
    {
      id: 13,
      name: "Amazon Echo Show 10",
      price: 249.0,
      originalPrice: 279.0,
      image:
        "https://i.pinimg.com/474x/ba/db/42/badb423f751b0ebf7d0e220fec51b1b5.jpg",
      isNew: false,
      onSale: true,
    },
    {
      id: 14,
      name: "Apple AirPods Pro",
      price: 249.0,
      image:
        "https://i.pinimg.com/474x/dc/9e/9a/dc9e9acb2557ce6129f167d839c4c8b7.jpg",
      isNew: true,
      onSale: false,
    },
    {
      id: 15,
      name: "Fitbit Charge 5",
      price: 179.0,
      image:
        "https://i.pinimg.com/474x/4b/2d/00/4b2d004bc2c1c5bff8da0448791fac73.jpg",
      isNew: true,
      onSale: true,
    },
    {
      id: 16,
      name: "Xiaomi Mi Smart Band 6",
      price: 49.0,
      image:
        "https://i.pinimg.com/474x/ec/c0/40/ecc0407ce8de15b2f86eafc6a7a801f2.jpg",
      isNew: false,
      onSale: false,
    },
    {
      id: 17,
      name: "Huawei Watch GT 2 Pro",
      price: 250.0,
      image:
        "https://i.pinimg.com/474x/4c/37/1f/4c371fe945c5dccbd82487ae33812cb2.jpg",
      isNew: true,
      onSale: false,
    },
    {
      id: 18,
      name: "Oculus Quest 2",
      price: 299.0,
      originalPrice: 349.0,
      image:
        "https://i.pinimg.com/474x/5e/ef/43/5eef43f0b3301705711d36009f3754ec.jpg",
      isNew: true,
      onSale: true,
    },
    {
      id: 19,
      name: "Instant Pot Duo 7-in-1",
      price: 89.0,
      image:
        "https://i.pinimg.com/474x/15/91/d3/1591d35e77f08b9e1b057f0f55d5d8b0.jpg",
      isNew: true,
      onSale: false,
    },
    {
      id: 20,
      name: "KitchenAid Artisan Stand Mixer",
      price: 399.0,
      originalPrice: 429.0,
      image:
        "https://i.pinimg.com/474x/c4/b6/dc/c4b6dcb95a3db0bb3c4b6af6833f8d1b.jpg",
      isNew: false,
      onSale: true,
    },
    {
        id: 21,
        name: "Men's High-Performance Soccer Cleats",
        price: 100.0,
        originalPrice: 90.0,
        image:
          "https://i.pinimg.com/474x/e8/54/89/e85489d314856bd7466ff9fd88a82741.jpg",
        isNew: true,
        onSale: false,
      },
      {
        id: 22,
        name: "4pcs Women's Personality Exaggerated",
        price: 30.0,
        originalPrice: 18.0,
        image:
          "https://img.kwcdn.com/product/fancy/63607f27-33be-4681-a96d-2d8b10486d2f.jpg?imageView2/2/w/800/q/70/format/webp",
        isNew: false,
        onSale: true,
      },
      {
        id: 23,
        name: "2pcs Elegant Rhinestone Watch",
        price: 50.0,
        originalPrice: 40.0,
        image:
          "https://img.kwcdn.com/product/fancy/07651303-157a-4aba-800a-b96051011105.jpg?imageView2/2/w/800/q/70/format/webp",
        isNew: false,
        onSale: true,
      },
      {
        id: 24,
        name: "TWS Wireless Earbuds with Battery Indicator",
        price: 16.0,
        originalPrice: 12.0,
        image:
          "https://img.kwcdn.com/product/open/2024-09-19/1726716112523-fb49af93f8eb44948003e73d8ff52290-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        isNew: true,
        onSale: false,
      }
  ];
  
  
  function createProductCard(product) {
    return `
          <div class="product-card">
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
          </div>
      `
  }
  
  