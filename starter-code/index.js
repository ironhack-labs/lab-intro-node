class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(pos < this.length){
      return this.items.indexOf(pos)
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if(this.length > 0){
      return Math.max(...this.items)
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if(this.length > 0){
      return Math.min(...this.items)
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if(this.length > 0){
    let sum = this.items.reduce((a, b) => a + b, 0);
    return sum / this.length
    }
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
