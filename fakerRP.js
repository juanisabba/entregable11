const faker = require("faker");

const { commerce, image, random } = faker;

const randomData = (n) => {
  const data = [];

  for (let i = 0; i < n; i++) {
    let name = commerce.productName();
    let price = commerce.price();
    let photo = image.technics(640, 480, true);

    data.push({ name: name, price: price, photo: photo });
  }

  return data;
};

module.exports = {randomData};
