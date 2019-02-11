class SortedList {
  constructor() {
    //this.sl = new SortedList();
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort();
    this.length++;
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    } else return this.items[this.items.length - 1];
  }
  min() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    } else return this.items[0];
  }
  average() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    let average = this.sum() / this.length;
    return average;
  }
  sum() {
    let listSum = 0;
    if (this.items.length === 0) {
      return 0;
    } else
      return this.items.reduce((current, accumulator) => {
        return current + accumulator;
      });
  }
}
//let sl = new SortedList();
module.exports = SortedList;
