class SortedList {
  constructor() {
    this.items= [];
    this.length= 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort(function(a,b){
      return a-b
    });
    this.length=this.items.length;
  }
  get(nth) {
    return this.items[nth-1]

  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    else {
    return this.items.pop(); 
    }
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    else {
    return this.items.shift(); 
    }
  }
  sum() {
    if (this.length < 1){
      return 0
    } else {
    return this.items.reduce(((a,b) => a + b));}
  };

  average() {
    if (this.length < 1) {
      throw new Error("EmptySortedList")
    } else {
    return this.items.reduce(((a,b) => a + b))/this.length;}
  }
};

module.exports = SortedList;
