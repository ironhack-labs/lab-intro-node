class SortedList {
  //Iteration 1: constructor()
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  //Iteration 2: add(item)
  add(item) {
    if (this.length === 0 || item > this.items[this.length - 1]) {
      this.items.push(item);
    } else if (item < this.items[0]) {
      this.items.unshift(item);
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (item > this.item[i] && item < this.item[i + 1]) {
          this.items.splice(i + 1, 0, item);
        }
      }
    }
    this.length = this.items.length;
  }
  // Iteration 3: get(pos)
  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  // Iteration 4: max()
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  // Iteration 5: min()
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
