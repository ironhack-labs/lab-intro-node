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

  min() {
    if (this.length === 0) { 
      throw new Error("EmptySortedList")
     
    } else {
      return Math.min(...this.items);
    }

  }
  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a,b) => a + b, 0) / this.items.length;
    }
  }
  sum() {}
};

module.exports = SortedList;
