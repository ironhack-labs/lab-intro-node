class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a , b) => a-b);
    this.length=this.items.length;
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if(this.items.length===0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if(this.items.length===0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }

  }
  average() {
    if(this.items.length===0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acu, it) => acu + it) / this.items.length;
    }
  }
  sum() {
    if(this.items.length===0){
      return 0;
    } else {
     return this.items.reduce((acu, it) => acu + it);
    } 
  }
};

module.exports = SortedList;
let sortedList = new SortedList();