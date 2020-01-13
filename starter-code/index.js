class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(x) {
    this.items.push(x)
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.items.length){
      throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length ==0){
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.items.length ==0){
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items)
  }

  sum() {
    if(this.items.length === 0){
      return 0
    }
    return this.items.reduce((a,b) => a + b, 0)
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.items.reduce((a,b) => a + b, 0)/this.items.length

  }
};

module.exports = SortedList;
