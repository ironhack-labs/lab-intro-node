class SortedList {
    constructor() {
      this.items = []
      this.length = this.items.length
    }
    add(item) {
      this.items.push(item)
      this.items.sort((a,b) => a-b)
      this.length = this.items.length
      
    }
    get(pos) {
      
      return this.items[pos]
      
    }
    max() {
      if (this.items.length != 0) {
        let nMax = Math.max(...this.items)
        
        return nMax
      } else {
        throw new Error("EmptySortedList")
      }
    }
    min() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList")
      } else {
        let nMin = Math.min(...this.items)
        return nMin
      }
    }
    average() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList")
      } else {

        return this.sum()/this.items.length
      }
    }
    sum() {
      if (this.length == 0) {
        return 0
      } else {
        let total = 0
        total += this.items.reduce(function(a,b){return a+b})

        return total
      }
    }
  };
  
  module.exports = SortedList;