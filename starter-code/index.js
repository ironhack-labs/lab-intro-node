class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.items.length == 0) throw new Error("EmptySortedList");

    return this.items[this.length - 1];
  }
  min() {
    if (this.items.length == 0) throw new Error("EmptySortedList");

    return this.items[0];
  }
  average() {
    if (this.items.length == 0) throw new Error("EmptySortedList");
    let total = this.sum();

    return total / this.length;
  }
  sum() {
    let total = 0;
    this.items.forEach(element => {
      total += element;
    });

    return total;
  }
};

module.exports = SortedList;
