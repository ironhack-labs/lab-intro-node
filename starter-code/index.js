class SortedList {
  constructor() {
    // this.items = listItems;
    // this.length = listLength;
    this.items = [];
    // this.length = 0;
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length++;
  }
  get(pos) {
    var position = this.items[pos - 1];
    return position;
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(items);
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(items);
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    var sumsum = 0;
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach(function(item) {
        sumsum += item;
      });
    }
    return sumsum;
  }
}

module.exports = SortedList;
