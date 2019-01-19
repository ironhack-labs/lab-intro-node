class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b) => a - b)
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.get(this.length);
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.get(1);
  }
  average() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.sum()/this.length;
  }
  sum() {
    return this.items.reduce((a,b) => a + b, 0);
  }
}

module.exports = SortedList;
