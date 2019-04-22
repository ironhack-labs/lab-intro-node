console.log('hi')
class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.length = this.items.push(x)
  }
  get(pos) {
    return this.items[pos]
  }
  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    return Math.max.apply(null, this.items);
  }
  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    return Math.min.apply(null, this.items);
  }
  average() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    let sum = 0
    for(var i = 0; i < this.items.length; i++){
      sum += this.items[i]
    }
    let average = sum/this.items.length;
    return average;
  }


  sum() {
    if(this.length === 0){
      return 0;
    }
    let sum = 0
    for(var i = 0; i < this.items.length; i++){
      sum += this.items[i]
    }
    return sum;
  }
};

module.exports = SortedList;
