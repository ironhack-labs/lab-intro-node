class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (this.items.length < pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length < 1) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b);
    }
  }

  avg() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b) / this.items.length;
    }
  }
}

module.exports = SortedList;

/* let list = new SortedList();
list.items = [1, 3, 5];
list.add(8);
console.log(list.items);
console.log("max is: " + list.max());
console.log(list.items[1]);
let results = list.get(1);
console.log(results); */
