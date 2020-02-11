class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }
   
  get(pos) {
    let result;
    if (pos > this.length-1){
      throw new Error("OutOfBounds");
    } else {
      this.items.forEach(function (el, i){
        if (pos === i) {
          result = el;
        } 
      });
    }
    return result;
  }

  max() {
    let max;
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      max = this.items.reduce(function(a, b) {
        return Math.max(a, b);
      });
    }
    return max;
  }

  min() {
    let min;
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      min = this.items.reduce(function(a, b) {
        return Math.min(a, b);
      });
    }
    return min;
  }

  sum() {
    let sum=0;
    sum = this.items.reduce(function(a, b) {
      return a+b
    },0);
    return sum;
  }

  avg() {}
}

module.exports = SortedList;
