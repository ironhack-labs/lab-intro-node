class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }
  add(item) {
    return this.items.push(item)
  }
  get(pos) {
    return this.items[pos]
    
  }
  max() {

    if (this.items.length = 0) {
      throw new Error("EmptySortedList")}
  }
  min() {

    if (this.items.length = 0) {
    throw new Error("EmptySortedList")}

  }
  average() {

    if (this.items.length = 0) {
      throw new Error("EmptySortedList")}
  }
  sum() {

  }
};

module.exports = SortedList;
