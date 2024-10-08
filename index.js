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
    return (this.length = this.items.length);
  }

  get(pos) {
    if (pos > this.items.length) throw new Error(`OutOfBounds`);
    return this.items[pos];
  }

  max() {
    let num = this.items[0];
    if (this.items.length == 0) throw new Error(`EmptySortedList`);
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item > num) {
        num = item;
      }
    }
    return num;
  }

  min() {
    let num = this.items[0];
    if (this.items.length == 0) throw new Error(`EmptySortedList`);
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item < num) {
        num = item;
      }
    }
    return num;
  }

  sum() {
    let sumOfArray = 0;
    this.items.reduce((acc, curr) => {
      acc += curr;
      return (sumOfArray = acc);
    }, 0);
    return sumOfArray;
  }

  avg() {
    if (this.items.length == 0) throw new Error(`EmptySortedList`);
    let sumOfArray = 0;
    this.items.reduce((acc, curr) => {
      acc += curr;
      return (sumOfArray = acc);
    }, 0);
    return sumOfArray / this.items.length;
  }
}

module.exports = SortedList;
