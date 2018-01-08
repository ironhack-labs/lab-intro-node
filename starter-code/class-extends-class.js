class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }

  nameAndPrice () {
    console.log(
      "The product's name is: " + this.name,
      "The product's price is: " + this.price
    );
  }
}

class Electronic extends Product {
  constructor (name, price, brand) {
    super(name, price);
    this.brand = brand;
  }
}

var banana = new Product("Banana", 2);
banana.nameAndPrice();

var mac = new Electronic("Mac", 200, "Apple");
mac.nameAndPrice();


class SuperDuper extends Electronic {
  constructor (name, price, brand, rating) {
    super(name, price, brand);
    this.rating= rating;
  }
}

var madMen = new SuperDuper("Netflix", 500, "movie", "5/10");
madMen.nameAndPrice();

/*
nameAndPrice() {
  console.log(this.rating)
}*/
