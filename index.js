class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  

  add(item) {
    
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length

  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let highest = 0;
    this.items.forEach((item) =>{
      if (item > highest) {
        highest = item;
      }
    })
    return highest; 
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let lowest = this.items[0];
    this.items.forEach((item) =>{
      if (item < lowest) {
        lowest = item;
      }
    })
    return lowest; 
  }

  sum() {
    if (this.length == 0) {
      return 0
    }
    let res = 0;
    this.items.forEach((item) =>{
      res += item
    })
    return res;
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.sum() /this.length;
  }
}

module.exports = SortedList;
