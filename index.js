class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("EmptySortedList");
    }

    return this.items.indexOf(pos);
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
