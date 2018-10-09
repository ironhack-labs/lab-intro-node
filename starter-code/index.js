class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => a-b);
  }
  get(pos) {
    return this.items[pos-1] 
    this.length = this.items.length;
  }
  max() {
    if(this.length>0) { 
      return Math.max(...this.items) 
    } else {
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if(this.length>0) { 
      return Math.min(...this.items) 
    } else {
      throw new Error("EmptySortedList")
    }
  }
  average() {

    if(this.length>0) { 
      return this.items.reduce((a,b) => {
        return a+b ;
      })/this.length
    } else {
      throw new Error("EmptySortedList")
    }
  }
  sum() {
    if(this.items.length>0){
      return this.items.reduce((a,b) => {
        return a+b ;
      })
    } else {
      return 0;
    }
  }
};

module.exports = SortedList;
