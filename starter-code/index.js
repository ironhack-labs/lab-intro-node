class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }
  get(pos) {
    if (this.length >= pos) {
    return this.items[pos];
    }
  }
  max() {
    if (this.length === 0){ 
      throw new Error("EmptySortedList");
    }
    else{
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0){ 
      throw new Error("EmptySortedList");
    }
    else{
      return Math.min(...this.items);
    }
  }
  sum() {
    if (this.length === 0){
      return 0;
    } else{
      return this.items.reduce((acc, cur) => acc + cur);
    }
  }
  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else{
      return this.sum()/this.length;
    }
  }
};

module.exports = SortedList;
