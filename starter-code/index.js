class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b)
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.items[this.items.length -1]
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[0]
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } 
    return this.sum() / this.items.length;
  }

  sum() {
    return this.items.reduce((acc, crr) => acc + crr)
  }
}

module.exports = SortedList;
