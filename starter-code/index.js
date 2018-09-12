class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
   add(item) {
      if (item) {
      this.items.push(item);
      this.items.sort((a, b) => {return a - b;});
      this.length++;
      }
  }
  get(pos) {
    if (pos <= this.length) {
      return this.items[pos-1];
  }}
  max() {
    if (this.length == 0){
      throw new Error("EmptySortedList");
    } else { return this.items[this.length-1]; }
  }
  min() {
    if (this.length == 0){
      throw new Error("EmptySortedList");
    } else {return this.items[0];}
  }
  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }
  average() {
    if (this.length == 0){
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.length-1;
    }
  }
};

module.exports = SortedList;
