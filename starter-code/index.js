class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;

  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length +=1;
  }
  get(pos) {
 return this.items[pos-1];
  }
  max() {
    if (this.length ==0){
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);

  }
  min() {
    if (this.length ==0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }
  average() {
    if (this.length ==0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length;

  }
  sum() {
    if (this.items ==0){
      return 0;
    }
    return this.items.reduce((a,b) => a+b, 0)
  }
};

module.exports = SortedList;
