class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length++;
    this.items.sort((a,b) => a - b)

  }
  get(x) {return this.items[x-1]}
  max() {return this.items[this.length-1]}
  min() {return this.items[0]}
  average() {
    let average = this.items.reduce((acc, curr) => ,0);
    return average;
  }
  sum() {
    let total = this.items.reduce((acc, curr) => acc + curr, 0);
    return total;
  }
};

module.exports = SortedList;
