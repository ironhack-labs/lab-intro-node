class SortedList {

  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
      return a-b
    })
  }

  get(pos) {
    return this.items[pos-1]
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
    return this.items[this.length-1]
    }
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
    return this.items[0]
    }
  }

  sum() {
    var mySum = 0;
    this.items.forEach( function(item){
      mySum += item;
    })
    return mySum;
  }

  average() {
    var myAverage = 0;
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      myAverage = this.sum() / this.length
      return myAverage
    }
  }
};

module.exports = SortedList;
