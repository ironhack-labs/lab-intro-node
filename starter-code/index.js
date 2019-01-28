class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
    }
  
   add(x) {
      this.items.push(x)
      this.items = this.items.sort((a,b) => a - b)
      this.length = this.items.length
  }

  get(pos) {
    // if(this.length <= pos) return this.items[pos - 1]
    // else throw new Error("OutOfBounds")   <--- Error was here 
    return this.items[pos-1]
  }

  max() {
    if(this.length > 0) return this.items[this.length-1]
    else throw new Error("EmptySortedList")
  }
  min() {
    if(this.length > 0) return this.items[0]
    else throw new Error("EmptySortedList")
  }
  average() {
    if(this.length > 0) return (this.sum()/this.length) 
    else throw new Error("EmptySortedList")
  }
  sum() {
    if(this.length === 0) return 0
    else return this.items.reduce((acc,cur) => {return acc + cur}, 0)
  }
};

module.exports = SortedList;
