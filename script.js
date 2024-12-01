fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".product-div");
    let cards = "";
    const remove = [6, 9, 19];
    const filteredProduct = data.products.filter(
      (product) => !remove.includes(product.id)
    );
    filteredProduct.forEach((product) => {
      cards += `<div class="product-cart"  data-aos="flip-left"
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
    container.innerHTML = cards;
  });
