class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }
  
  add(x) {
      this.items.push(x)
      this.length++;
      this.items.sort((a, b) => a - b)
  }

  get(i) {
    return this.items[i-1]
  }

  max() {
    if (this.length === 0) { 
    throw new Error("EmptySortedList")
   
  } else {
    return this.items[this.length-1];
  }
}

  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
