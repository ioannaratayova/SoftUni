function updateStock(storeStock, delivery) {
  const stock = {};

  // iterate over the current stock of the store
  for (let i = 0; i < storeStock.length; i += 2) {
    const product = storeStock[i];
    const quantity = Number(storeStock[i + 1]);

    stock[product] = quantity;
  }

  // iterate over the delivery
  for (let i = 0; i < delivery.length; i += 2) {
    const product = delivery[i];
    const quantity = Number(delivery[i + 1]);

    if (stock.hasOwnProperty(product)) {
      stock[product] += quantity;
    } else {
      stock[product] = quantity;
    }
  }

  // print the stock
  for (let product in stock) {
    console.log(`${product} -> ${stock[product]}`);
  }
}