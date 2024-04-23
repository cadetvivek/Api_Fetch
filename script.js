


fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(products => {
    const cardsContainer = document.getElementById("cards");
    const cardsHTML = products.map(product => createCardHTML(product)).join('');
    cardsContainer.innerHTML = cardsHTML;
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

function createCardHTML(product) {
  return `
    <div class="card">
      <h1 class="title">${product.title}</h1>
      <img src="${product.image}" alt="img" class="images">
      <p>${product.description}</p>
      <p class="category">${product.category}</p>
      <p class="price">Price: $${product.price}</p>
    </div>
  `;
}
