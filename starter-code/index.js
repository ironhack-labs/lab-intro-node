class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort();
    this.length = this.items.length;
  }
  get(pos) {
    if(this.length === 0){
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos-1]
      };
  }
  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length-1];
      };
  }
  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
      };
  }
  average() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.length;
    }
  }
  sum() {
    return this.items.reduce((a,b)=>{return a + b}, 0);
  }
};

module.exports = SortedList;
