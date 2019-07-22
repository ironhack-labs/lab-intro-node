class SortedList {
    constructor() {
      this.items = []
      this.length = this.items.length
    }
    add(x) {
      this.items.push(x)
      this.items.sort((a, b) => a - b)
      this.length = this.items.length
    }
    get(pos) {
      return this.items[pos]

    }
    max() {
      if(this.items.length >= 1) {
       return (Math.max(...this.items))
      } else {
        throw new Error("EmptySortedList")
      }
    }
    min() {
      if(this.items.length >= 1) {
       return (Math.min(...this.items))
      } else {
        throw new Error("EmptySortedList")
      }
    }
    sum() {
      if(this.items.length == 0) {
        return 0
      } else {
      return this.items.reduce(function(a,b) {
        return a + b}, 0)
      }
    }
    average() {
      if(this.items.length == 0) {
        throw new Error("EmptySortedList")
      } else {
      return (this.sum()/this.items.length)
      }
    }
  };
  
  module.exports = SortedList;

