class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
    return this.items[pos -1];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  average() {
    if(this.length>0){
    return this.items.reduce((total, current) => total + current) / this.length;
  } throw new Error("EmptySortedList");
  };
  sum() {
    return this.items.reduce((total, current) => total + current, 0);
  }
};

module.exports = SortedList;
