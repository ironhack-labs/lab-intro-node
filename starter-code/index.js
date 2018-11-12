class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length ++;
  }
  get(pos) {
    return this.items[pos -1];
  }
  max() {
    if (this.length == 0){
      throw new Error("EmptySortedList")
    } else {
     return this.items.length[-1];
    }
   
  }
  min() {
    if (this.length == 0){
      throw new Error("EmptySortedList")
    } else {
     return this.items.length[0];
    }
  }
  average() {
    if (this.items == 0){
      throw new Error("EmptySortedList")
    } else {
     return this.max()/this.min;
    }
  }
  sum() {
    if (this.items == 0){
      return 0;
    } else {
     
    }
  }
};

module.exports = SortedList;
