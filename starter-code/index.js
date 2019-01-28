class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b)=>{ return a - b })
    this.length++;
    
  }
  get(pos) {
    if (pos > this.length) {
      return new Error("OutOfBounds");
    }
    return this.items[pos - 1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max.apply(Math, this.items);
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(Math, this.items);
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((total,currentNum)=>{
         return total + currentNum
         
    })/ this.length
    
    
    
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    
    return this.items.reduce((total,currentNum)=>{
      return (total + currentNum);

  })
  }
}

module.exports = SortedList;
