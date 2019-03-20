class SortedList {
  constructor() {
    this.myArray = [];
    this.length = this.myArray.length
  }
  add(item) {
    this.myArray.push(item);
    this.length = this.myArray.length
  }
  get(pos) {}
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
