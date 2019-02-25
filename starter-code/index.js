class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }
  get(pos) {
    this.items[pos]
    return this.items[pos-1]
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }

    return this.items[this.items.length - 1]
  }
  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[0]
  }
  average() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList")
    } 
    return this.sum() / this.items.length

  }

  sum() {
      if (this.items.length === 0){
      return 0
    } else {
      return this.items.reduce((acc, current)=>{
          return acc += current
    })
    
  }
  
  }
}; 

module.exports = SortedList;
