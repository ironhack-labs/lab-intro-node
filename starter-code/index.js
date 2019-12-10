
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items = this.items.sort(function(a,b){
      return  a-b;
    });
  }

  get(pos) {
    if (pos > this.items.length){
      throw new Error("OutOfBounds");
    }
    else return(this.items[pos]);
  }

  max() {
    var maxVal = Math.max(...this.items);
    if (this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return maxVal;
    
  }

  min() {
    var minVal = Math.min(...this.items);
    if (this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return minVal;
  }

  sum() {
    if (this.items.length == 0){
      return 0;
    }
    else{
    var sum = this.items.reduce(function(a,b){return a+b});
    return sum;
    }
  }
  


  avg() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    else{
      return this.sum(this.items)/this.items.length
    }
  }
}

module.exports = SortedList;
