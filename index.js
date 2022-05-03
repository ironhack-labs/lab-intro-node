class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (item) {
      this.items.push(item);
      this.length++;
      this.items.sort((a, b) => a - b);
    }
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return pos;
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min.apply(null, this.items);
    }
  }

  sum() {
    let sum = 0;

    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    let total = 0;
    let count = 0;

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach(function (item, index) {
        total += item;
        count++;
      });

      return total / count;
    }
  }
}

module.exports = SortedList;
