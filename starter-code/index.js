class SortedList {
  constructor() {
    this.sortedArray = [];
    this.length = 0;
  }
  add(item) {
    this.sortedArray.push(item);
    this.length++;
    if (this.length > 1) this.sortedArray.sort((n1, n2) => n1 - n2);
  }
  get(pos) {
    if ((this.length == 0)) throw new Error("OutOfBounds");
    return this.sortedArray[pos-1];
  }
  max() {
    if ((this.length == 0)) throw new Error("EmptySortedList");
    return this.sortedArray[this.length - 1];
  }
  min() {
    if ((this.length == 0)) throw new Error("EmptySortedList");
    return this.sortedArray[0];
  }
  average() {
    if ((this.length == 0)) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
  sum() {
    if ((this.length == 0)) return 0;
    return this.sortedArray.reduce((acc, num) => acc + num, 0);
  }
}

module.exports = SortedList;
