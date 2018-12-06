class SortedList {
  constructor() {
    this.items =[];
    this.length=0;
  }
  add(item) {
    this.items.push(item);
    this.length+=1;
    this.items.sort(function(a, b){return a-b});
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length-1];
  }
  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }
  average() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    var sum = this.items.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sum/this.items.length;
  }
  sum() {
    if (this.items.length === 0){
      return 0;
    }
    var sum = this.items.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sum;
  }
};

module.exports = SortedList;