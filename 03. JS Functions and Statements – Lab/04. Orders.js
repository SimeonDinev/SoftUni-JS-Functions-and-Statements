function shoping(product, quantityOfTheProduct) {
  let price;

  if (product === "coffee") {
    price = 1.5 * quantityOfTheProduct;
  } else if (product === "water") {
    price = 1 * quantityOfTheProduct;
  } else if (product === "coke") {
    price = 1.4 * quantityOfTheProduct;
  } else if (product === "snack") {
    price = 2 * quantityOfTheProduct;
  } else {
    return console.log("Erorr!");
  }
  console.log(price.toFixed(2));
}

shoping("waeter", 2);
