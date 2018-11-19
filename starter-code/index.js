class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length++
  }
  get(pos) {
    if(pos < 0 || pos > this.length){
      return Error("OutOfBounds")
    } else {
      return this.items[pos-1]
    }
  }
  max() {
    if(this.length === 0){
      return Error("EmptySortedList")
    } else {
      return this.items[this.length-1]
    }
  }
  min() {
    if(this.length === 0){
      return Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }
  average() {
    if(this.length === 0){
      return Error("EmptySortedList")
    } else {
      return this.sum()/this.length
    }
  }
  sum() {
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this.length === 0){
      return 0
    } else {
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
  }
};

module.exports = SortedList;
