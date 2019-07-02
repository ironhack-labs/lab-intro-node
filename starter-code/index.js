class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(items) {
    this.items.push(items);
    this.length = this.items.length;
  }
  get(pos) {}
  max() {}
  min() {}
  average() {}
  sum() {}
}
module.exports = SortedList;
