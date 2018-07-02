class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }

  add(x) {
    this.item.push(x);
    this.item.sort(function(a, b) {
      return a - b;
    });
    this.length += 1;
  }
  get(i) {
    return this.item[i - 1];
  }
  max() {
    return Math.max(...this.item);
  }
  min() {
    return Math.min(...this.item);
  }
  average() {
    return this.sum()/this.item.length;
  }
  sum() {
    if (this.item.length == 0) {
      return "EmptySortedList";
    } else {
      return this.item.reduce((acc, number) => acc + number);
    }
  }
}
module.exports = SortedList;
