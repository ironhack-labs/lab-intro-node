class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.length += 1;
    this.items.sort(function(a, b){return a-b});
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.items.length > 0) {
    return Math.max.apply(Math, this.items);
    } else {
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if (this.items.length > 0) {
      return Math.min.apply(Math, this.items);
      } else {
        throw new Error("EmptySortedList")
      }
  }
  average() {
    if (this.items.length > 0) {
      return this.sum()/this.items.length;
      } else {
        throw new Error("EmptySortedList")
      }
  }
  sum() {
    var suma = 0;
    for (let i = 0; i < this.items.length; i++) {
      suma += this.items[i];
    }
    return suma;
  }
};

module.exports = SortedList;
