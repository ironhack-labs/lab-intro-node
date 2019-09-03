class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    }
  add(x) {
    this.items.push(x)
    this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
  }
  
  get(pos) {
    return this.items[pos]
    
    }
  max() {
    if (this.items.length ===0){ throw new Error("EmptySortedList") }
      return Math.max(...this.items)
    }
  min() {
    if (this.items.length ===0){ throw new Error("EmptySortedList") }
    return Math.min(...this.items)
    }
  average() {
    if (this.items.length === 0) { throw new Error("EmptySortedList") }
    let sum = this.items.reduce((a, b) => { return a + b })
    let aver = sum / this.items.length
    return aver
    // if (this.items.length ===0){ return 0 }
    // return this.items.reduce((a, b) => {return a +b})
    }
  sum() {
    if (this.items.length ===0 ){ return 0 }
    return this.items.reduce((a, b) => {return a +b})
    }
  };
  



  module.exports = SortedList;