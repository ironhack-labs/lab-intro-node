class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort(function(a, b){return a-b})
    this.length = this.items.length;
  }
  get(i) {
    return this.items[i-1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      //var arr = this.items.sort(function(a, b){return a-b})
      return this.items[this.items.length-1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      var arr = this.items.sort(function(a, b){return a-b})
      return arr[0];
    }
  }
  sum() {
    var sum = 0;
    for ( var i = 0; i <this.items.length; i++ ){
    sum += (this.items[i]);}
    return sum
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else{
    return this.sum()/this.items.length;
  }
}

};

module.exports = SortedList;
