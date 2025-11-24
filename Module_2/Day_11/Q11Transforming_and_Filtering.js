function processProducts(products) {
  const names = products.map(p => p.name);

  products.forEach(p => {
    if (p.price > 50) {
      console.log(`${p.name} is above $50`);
    } else {
      console.log(`${p.name} is below $50`);
    }
  });

  return names;
}

processProducts([
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
]);
