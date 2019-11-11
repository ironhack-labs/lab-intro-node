class SortedList {
    constructor() {
      this.items = [],
      this.length = this.items.length
    }
    add(item) {
      this.items.push(item)
      this.length = this.items.length
    }
    get(pos) {

      this.items.sort((a, b) => a - b)
      if (this.items.length < pos) {
        throw new Error("OutOfBounds")
      } else {
        return this.items[pos]
      }
    }

    max() {
     if(this.items.length == 0) {
      throw new Error("EmptySortedList")
      } else {
        return Math.max(...this.items)
      }
    }

    min() {
      if(this.items.length == 0) {
        throw new Error("EmptySortedList")
        } else {
          return Math.min(...this.items)
        }
    }
    average() {
      if(this.items.length == 0) {
        throw new Error("EmptySortedList")
        } else {
          return this.sum()/this.items.length
        }
    }
    
    sum() {
      let sum = 0
      for(let i=0; i<this.items.length; i++) {
        sum += this.items[i]
      } return sum
    }
  };
  
  module.exports = SortedList;