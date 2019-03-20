class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length
  }
  add(item) {
    this.item.push(item);
    this.length = this.item.length
  }
  get(pos) {}
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
