class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  
  add(item) {
  this.items.push(item)
  this.length = this.items.length
  this.items.sort((a,b) => a - b)
  }
  
  get(pos) {
    return this.items[pos -1]
  }
  
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    let ult = this.items[this.items.length - 1]
    return ult

  }

  
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    
    return this.items[0]
  }
  
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.items.length
  }
  
  sum() {
if(this.length === 0){
  return 0
  }
return this.items.reduce((a,b) => a + b)
  }
};
new SortedList
module.exports = SortedList;
