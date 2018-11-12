class SortedList {
  
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
   this.items.push(item);
   this.length++;
   this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos-1]) {
    return this.items[pos-1];
    }else  throw new Error("OutOfBounds");
  }
  max() {
    if(this.length===0) {
      throw new Error("EmptySortedList")
    } else return this.items[this.length-1];
  }
  min() {
    if(this.length===0) {
      throw new Error("EmptySortedList")
    } else return this.items[0];
  }

  average() {
    if(this.length===0) {
      throw new Error("EmptySortedList")
    } else return Math.floor( this.items.reduce((acum, value)=> acum + value / this.items.length, 0))
  }

  sum() {
    if(this.length===0) {
      return 0;
    } else 
  return this.items.reduce((acum, value)=> acum + value, 0)
  }
};

module.exports = SortedList;
