class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let index = 0;
    for (index = 0; index < this.length; index++) {
      if (this.items[index] > item) {
        break;
      }
    }
    this.items.splice(index, 0, item);
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let maxValue = this.items[0];
    for (let i = 0; i < this.length; i++) {
      if (this.items[i] > maxValue) {
        maxValue = this.items[i];
      }
    }
    return maxValue;
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    let minValue = this.items[0];
    for (let i = 0; i < this.length; i++) {
      if (this.items[i] < minValue) {
        minValue = this.items[i];
      }
    }
    return minValue;
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
