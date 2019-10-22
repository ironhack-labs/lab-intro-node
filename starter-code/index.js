class SortedList {
    constructor(items, length) {
      this.items = []
    }

    get length(){
      return this.items.length
    }

    add(item) {
      this.items = [...this.items, item]
      this.items.sort((a, b) => a - b)
    }
    get(pos) {
      if(pos > this.items.length || pos < 0) {
        throw new Error("OutOfBounds")
      }
      return this.items[pos]
    }
    max() {
      if(!this.length) {
        throw new Error("EmptySortedList")
      }
      return Math.max(...this.items)    
    }
    min() {
      if(!this.length) {
        throw new Error("EmptySortedList")
      }
      return Math.min(...this.items)
    }
    average() {
      if(!this.length) {
        throw new Error("EmptySortedList")
      }
      return this.items.reduce((acc, item) => {
        return acc + item
      } ,0) / this.items.length
    }
    sum() {
      return !this.items.length ? 0 : this.items.reduce((acc, item) => {
        return acc + item
      } ,0)
    }
  };
  
  module.exports = SortedList;