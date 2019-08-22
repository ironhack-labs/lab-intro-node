class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }


  add(item) {
    this.items.push(item);
    this.length++;

    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let total = (acc, curr) => acc + curr;
      return this.items.reduce(total) / this.length;

    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      let total = (acc, curr) => acc + curr;
      return this.items.reduce(total);

    }

  }
};

module.exports = SortedList;