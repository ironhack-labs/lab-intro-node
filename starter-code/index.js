class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){return a-b})
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.length>0){
      return this.items[this.length-1]
    }
    else {throw new Error("EmptySortedList")
  }
  }
  min() {
    if(this.length>0){
      return this.items[0]
    }
    else {throw new Error("EmptySortedList")
  }
  }
  sum() {
    let sum = 0
    this.items.forEach(function(oneitem){
      sum += oneitem
    })
    return sum
  }
  average() {
    if(this.length>0){
      return this.sum()/this.length
    }
    else {throw new Error("EmptySortedList")
  }
  }
};

var sortedList = new SortedList() 

module.exports = SortedList;
