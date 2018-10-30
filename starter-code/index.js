class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.length++
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    return this.items
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    } 
  }
  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    } 
  }
  sum() {
    let sum = 0;
    for (var i = 0; i < this.length; i++){
      sum = sum + this.items[i]
    }
    return sum
  }
  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    } else {
    let sum = 0;
    for (var i = 0; i < this.length; i++){
      sum = sum + this.items[i]
    }
    let avr = sum / this.length
    return avr
    } 
    
  }
};

new SortedList()

module.exports = SortedList;
