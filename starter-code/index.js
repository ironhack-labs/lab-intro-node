class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }
  get(pos) {}
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
let sortedList = new SortedList();