class SortedList {
    constructor() {
      this.items = []
    }

    get length(){
      return this.items.length
    }

    add(item) {
      this.items.push(item)
      this.items.sort((a, b) => a - b)
    }

    get(pos) {
      return this.items[pos]
    }

    max() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else {
        return Math.max(...this.items)
      }
    }

    min() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else {
        return Math.min(...this.items)
      }
    }

    average() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else {
        return this.items.reduce((acc, it) => acc += it) / this.length
      }
    }

    sum() {
      if (this.length === 0) {
        return 0
      } else {
        return this.items.reduce((acc, it) => acc += it)
      }
    }
  };
  
  module.exports = SortedList;