class SortedList {

  constructor() {
    this.items = [];
    this.length = this.items.length;
  };
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b){return a-b});
  };
  get(pos) {
    return this.items[pos - 1];
  };
  max() {
    if (this.items.length != 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items.length != 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.items.length != 0) {
    let sum = this.items.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    });
    return sum / this.length;
    } else {
    throw new Error("EmptySortedList");
  };
  };
  sum() {
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
};

module.exports = SortedList;
