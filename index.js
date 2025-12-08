class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    // let sum = 0;
    // this.items.forEach((currentElement) => {
    //   sum += currentElement;
    // });
    // return sum;

    const total = this.items.reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
    return total;
  }

  avg() {
    let sum = 0;
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach((currentElement) => {
        sum += currentElement;
      });
    }
    return sum / this.items.length;
  }
}

module.exports = SortedList;
