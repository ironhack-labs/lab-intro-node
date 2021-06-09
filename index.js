class SortedList {
  constructor() {
    this.items =[];
    this.length = this.items.length;
  }
  add(item) {
  this.items.push(item)
  this.items = this.items.sort((a,b)=> a-b)
  this.length = this.items.length
  }
  get(pos) {
    if(!(pos >= this.length)){
      return this.items[pos]
    }
    else {
      throw new Error("OutOfBounds")
    }
  }
  max() {
    if(!(this.length >= this.items)){
      return Math.max(...this.items)
    }
    else {
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if(!(this.length >= this.items)){
      return Math.min(...this.items)
    }
    else {
      throw new Error("EmptySortedList")
    }
  }
  sum() {
    return this.items.reduce((a,b)=> a+b,0)
  }
  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    }
      return (this.sum()/this.items.length)
}}

module.exports = SortedList;

