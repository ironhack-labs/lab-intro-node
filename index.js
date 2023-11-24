class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let itemIdex = 0;
    for (const element of this.items) {
      if (element > item) break;
      else itemIdex++;
    }
    this.items.splice(itemIdex, 0, item);
    this.length = this.items.length;
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

    return this.items.reduce((max, number) => {
      return number > max ? number : max;
    }, Number.MIN_SAFE_INTEGER);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items.reduce((min, number) => {
      return number < min ? number : min;
    }, Number.MAX_SAFE_INTEGER);
  }

  sum() {
    return this.items.reduce((sum, number) => sum + number, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((avg, number) => avg + number / this.length, 0);
  }
}

module.exports = SortedList;
