class SortedList {
    constructor() {
    this.items = [];
    this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length;
    }
    get(pos) {
      if (pos > this.items.length) {
        TypeError('OutOfBounds')} else {this.items.indexOf(pos)};
    }
    max() {
      if (this.items.length === 0) {
        TypeError("EmptySortedList");
      } else {Math.max(...this.items)
      }
    }
    min() {
      if (this.sortedList.length === 0) {
        TypeError("EmptySortedList");
      } else {Math.min(...this.items);}
    }
    average() {
      return this.sum(this.items) / this.items.length;
      }
    sum() {
      this.items.reduce(sumFunc);

      function sumFunc(ac, cu) {
        return ac+cu;
    }
  };
  
  module.exports = SortedList;