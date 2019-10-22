class SortedList {
    constructor() {
      this.items = []           
    }
    get length(){
      return this.items.length
    }    
    add(item) {
      this.items.push(item)
      this.items.sort((a,b) => a - b)
    }
    get(pos) {
      if (pos >= this.length) throw new Error ("OutOfBounds")
      return this.items[pos]      
    }
    max() {
      if (this.length === 0) throw new Error("EmptySortedList")
      return this.items[this.length - 1]
    }
    min() {
      if (this.length === 0) throw new Error("EmptySortedList")
      return this.items[0]
    }
    average() {
      if (this.length <= 0) throw new Error("EmptySortedList")
      return this.sum()/this.length
    }
    sum() {
      return this.length <= 0 ? 0 : this.items.reduce((a,b) => a+b, 0)      
    }
  };
  
  module.exports = SortedList;