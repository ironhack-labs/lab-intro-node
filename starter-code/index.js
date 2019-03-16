class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++
    this.items.sort((a,b) => a - b)
  }
  get(pos) {
    return this.items[pos]
  }
  max() {
    if(this.items.length <= 0) throw new Error("EmptySortedList");
      return this.items[this.items.length-1]
  }
  min() {
    if(this.items.length <= 0) throw new Error("EmptySortedList");
      return this.items[0]
  }
  average() {
    var sum = this.items.reduce(function(val, acc){
      return val + acc
    }, 0);
    var length = this.items.length
    if(this.items.length <= 0) throw new Error("EmptySortedList");
    return sum / length
  }
  sum() {
    return this.items.reduce(function(val, acc){
      return val + acc
    }, 0)
  }
};

module.exports = SortedList;
