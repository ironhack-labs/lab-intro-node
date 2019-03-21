class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length
  }
  add(item) {
    this.item.push(item);
    this.item.sort ((a,b) => a - b);
    this.length = this.item.length
  }
  get(pos) {
    return this.item[pos]
  }
  max() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.item)
    }
  }
  min() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.item)
    }    
  }
  average() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.item.reduce((acc, it) => (acc+=it), 0)/this.item.length
    }    
  }
  sum() {
    if (this.item.length === 0) {
      return 0
    } else {
      return this.item.reduce((acc, it) => acc+=it, 0)
    }    
  }
};

module.exports = SortedList;
