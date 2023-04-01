class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
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
    if (this.length > 0) {
      let highestValue = this.items[0];
      this.items.forEach((item) => {
        if (highestValue < item) {
          highestValue = item;
        }
      });
      return highestValue;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      let lowestValue = this.items[0];
      this.items.forEach((item) => {
        if (lowestValue > item) {
          lowestValue = item;
        }
      });
      return lowestValue;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let result = 0;
    this.items.forEach((item) => {
      result += item;
    });
    return result;
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
