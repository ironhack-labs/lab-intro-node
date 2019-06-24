class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a,b) => a-b)
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    
    if (!this.items.length == 0 ){
      return Math.max(...this.items)
    }else {
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if (!this.items.length == 0 ){
      return Math.min(...this.items)
    }else {
      throw new Error("EmptySortedList")
    }
  }
  average() {
    if (!this.items.length == 0){
      return this.sum()/this.length
    }else {
    throw new Error("EmptySortedList")    
  }

  }
  sum() {
    let sum = (a,b) => a+b;
    if (!this.items.length == 0){
      return this.items.reduce(sum)
    }else {
      return 0
    }
  }   
};

module.exports = SortedList;
