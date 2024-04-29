class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length === 0) {
      this.items.push(item);
    } else {
      let index = 0;
      while (index < this.length && item > this.items[index]) {
        index++;
      }
      this.items.splice(index, 0, item);
    }
    this.length++;
  }

  get(pos) {
    if (pos <= 0 || pos > this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");

    let max = this.items[0];
    this.items.forEach((item) => {
      max = max > item ? max : item;
    });

    return max;
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");

    let min = this.items[0];
    this.items.forEach((item) => {
      min = min < item ? min : item;
    });

    return min;
  }

  sum() {
    return this.items.reduce((acc, current) => acc + current, 0);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
