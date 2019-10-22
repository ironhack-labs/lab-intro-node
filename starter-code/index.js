class SortedList {
    constructor() {
      this.items = []
    }

    get length() {
      return this.items.length
    }
    add(item) {
      this.items = [...this.items, item].sort((a, b) => a - b)
    }
    get(pos) {
      if (pos < this.length) {
        return this.items[pos]
      } else {
        throw new Error("OutOfBounds")
      }
    }
    max() {
      if (this.length > 0) {
        return this.items[this.length - 1]
      } else {
        throw new Error("EmptySortedList")
      }
    }
    min() {
      if (this.length !== 0) {
        return this.items[0]
      } else {
        throw new Error("EmptySortedList")
      }
    }
    average() {
      if(this.length === 0) throw new Error("EmptySortedList")
      return this.sum() / this.length
    }
    sum() {
      if(this.items.length === 0) return 0
      return this.items.reduce((acc, e) => acc + e)
    }
  };
  
  module.exports = SortedList;