class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  };

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length++;
  };

  get(pos) {
    return this.items[pos - 1];
  };

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    //return Math.max(...this.items)
    //return this.items[this.length -1]
    return this.get(this.length) // is better bc faster on computer
  };

  min() {
    if (this.length === 0)
      throw new Error("EmptySortedList")
    return this.items[0]
  };

  sum() {
    return this.items.reduce((acc, x) => { acc + x, 0})
  }
  average() {
    if (this.length === 0)
      throw new Error("EmptySortedList")
    return this.sum() / this.length
  };
}


module.exports = SortedList;