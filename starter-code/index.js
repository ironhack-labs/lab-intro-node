class SortedList {
  constructor() {
    this.items=[],
    this.length=0
  }

  add(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length = this.items.length
}

  get(pos) {
    if(pos > this.items.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)
  }

  sum() {
    let numSum = this.items.reduce((a, b) => a + b, 0)
    return numSum
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList;


