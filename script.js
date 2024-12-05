fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".product-div");
    let cards = "";
    const remove = [6, 9, 19];

    const filteredProduct = data.products.filter(
      (product) => !remove.includes(product.id)
    );

    const renderProducts = (products) => {
      container.innerHTML = "";
      products.forEach((product) => {
        container.innerHTML += `<div class="product-cart"  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <i class="fa-regular fa-star"></i>
            <div class="product-img">
                <img src="${product.thumbnail}" alt="${product.title}">
            </div>
            <div class="product-title">
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <div class = "bottom">
                <p class = "price">${product.price} $</p>
                <button class = "order animate__animated animate__pulse animate__infinite">Make a order</button>
                </div>
            </div>
        </div>`;
      });
    };

    renderProducts(filteredProduct);
    const beautyButton = document.querySelector(".beauty");
    beautyButton.onclick = () => {
      const filterBybeauty = filteredProduct.filter(
        (product) => product.category === "beauty"
      );
      renderProducts(filterBybeauty);
    };
    const home = document.querySelector(".home");
    home.onclick = () => {
      const filterByhome = filteredProduct.filter(
        (product) => product.category === "furniture"
      );
      renderProducts(filterByhome);
    };
    const meal = document.querySelector(".meal");
    meal.onclick = () => {
      const filterBymeal = filteredProduct.filter(
        (product) => product.category === "groceries"
      );
      renderProducts(filterBymeal);
    };
    const input = document.querySelector(".search");
    input.addEventListener("input", () => {
      const filterInput = filteredProduct.filter((product) =>
        product.title.toLowerCase().includes(input.value.toLowerCase())
      );
      renderProducts(filterInput);
      if (filterInput.length === 0) {
        container.innerHTML = "<p>Aradığınız ürün bulunamadı.</p>";
      }
    });
    console.log(data);
  });
