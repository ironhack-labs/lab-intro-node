class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>a-b)
    this.length++
  }
  get(pos) {
if (pos > this.length){
  throw new Error("OutOfBounds")
  } 
  return this.items[pos - 1]
  }
  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
      }
      return this.items[this.length - 1] 
    }
  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.items[0]
  }
  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }
    
    return this.sum()/ this.length

  }
  sum() {
    if (this.length === 0){
      return 0
    } 
    return this.items.reduce(function(sum, item){return sum + item})
  }

};

module.exports = SortedList;
