class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length++;
    this.items.sort((a, b) => a -b);
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if(this.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length - 1];
  }
  min() {
    if(this.length === 0) throw new Error("EmptySortedList");
    else return this.items[0];
  }
  average() {
    if(this.length === 0) throw new Error("EmptySortedList");
    else return this.sum() / this.length;
  }
  sum() {
    if(this.length === 0) return 0;
    else {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer);
    }
  }
};

module.exports = SortedList;
