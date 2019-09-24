class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    
  }
  get(pos) {
    if (pos > this.items.length - 1 || pos < 0) throw new Error("OutOfBounds");
    else return this.items[pos];
  }
  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length - 1];
  }
  min() {

  }
  average() {

  }
  sum() {

  }
};

module.exports = SortedList;