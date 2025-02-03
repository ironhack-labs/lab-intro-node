class SortedList {
  constructor() {
    this.item = [];
    this.length = 0;
  }

  add(item) {
    this.item.push(item);
    this.item.sort((a, b) => a - b);
    this.length = this.item.length;
  }

  get(pos) {
    if (this.item[pos] === undefined) {
      throw new Error("OutOfBounds");
    }
    return this.item[pos];
  }

  max(item) {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.item);
  }

  min(item) {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    return Math.min(...this.item);
  }

  sum(item) {
    let sum = 0;
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    for (let i = 0; i < item.length; i++) {
      sum += item[i];
    }
    return sum;
  }

  avg(item) {
    let sum = 0;
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    for (let i = 0; i < item.length; i++) {
      sum += item[i];
    }
    return sum / this.length;
  }
}

module.exports = SortedList;
