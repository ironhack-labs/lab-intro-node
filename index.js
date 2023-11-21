class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (0 < this.length) {
      return this.items[this.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (0 < this.length) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let summ = 0;
    for (let i = 0; i < this.length; i++) {
      summ += this.items[i];
    }
    return summ;
  }

  avg() {
    if (0 === this.length) {
      throw new Error("EmptySortedList");
    } else {
      let summ = 0;
      for (let i = 0; i < this.length; i++) {
        summ += this.items[i];
      }
      return summ / this.length;
    }
  }
}

module.exports = SortedList;
