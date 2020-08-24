class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    this.items.forEach((number) => {
      sum = sum + number;
      console.log(`the number is ${number}`);
    });
    console.log(`the sum is ${sum}`);
    return Number(sum);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      let sum = 0;
      this.items.forEach((number) => {
        sum = sum + number;
      });
      return Number(sum / this.length);
    }
  }
}

module.exports = SortedList;
