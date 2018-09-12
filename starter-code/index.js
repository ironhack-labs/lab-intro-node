class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.lenght;
  }
  add(item) {
    this.items.push(item)
  }
  get(pos) {
    return this.items[pos]
  }
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
