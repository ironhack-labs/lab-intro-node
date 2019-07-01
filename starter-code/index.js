class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    console.log(pos)
    console.log(this.items[pos])
    return this.items[pos -1];
  }
  max() {
    if (this.length > 0)
      return this.items[this.length - 1];
    else
      throw new Error("EmptySortedList")
  }
  min() {
    if (this.length > 0)
      return this.items[0];
    else
      throw new Error("EmptySortedList")
  }
  average() {
    if (this.length > 0)
      return this.items.reduce((total, sum) => total + sum, 0) / this.length;
    else
      throw new Error("EmptySortedList")
  }
  sum() {
    return this.items.reduce((total, sum) => total + sum, 0)
  }
};

module.exports = SortedList;
