class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      let currentMax = 0;

      for (let i = 0; i < this.length; i++) {
        if (this.items[i] > currentMax) {
          currentMax = this.items[i];
        }
      }
      return currentMax;
    }
  }

  min() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      let currentMin = this.items[0];

      for (let i = 0; i < this.length; i++) {
        if (this.items[i] < currentMin) {
          currentMin = this.items[i];
        }
      }
      return currentMin;
    }
  }

  sum() {
    return this.items.reduce((acc, item) => {
      return acc + item;
    }, 0);
  }

  avg() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
