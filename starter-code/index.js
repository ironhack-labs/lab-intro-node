class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
   if(!this.items[pos]){
    throw new Error("OutOfBounds");
   }
   return this.items[pos];
  }

  max() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    }
      return Math.max(...this.items);
  }

  min() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if(this.length == 0){
      return 0;
    }
    return this.items.reduce(
      (a, b) => a + b, 0);
  }

  avg() {}
}



module.exports = SortedList;
