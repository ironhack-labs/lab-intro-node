class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (this.items[pos - 1] === null) {
      throw new Error("Out Of Bounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    var maxN = this.items[0]
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > maxN) {
        maxN = this.items[i]
      }
    }
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return maxN;
  }

  min() {
    var minN = this.items[0]
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] < minN) {
        minN = this.items[i]
      }
    }
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return minN;
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.items.length;
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b, 0);
  }
};


module.exports = SortedList;