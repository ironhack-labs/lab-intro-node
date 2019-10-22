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
      if ((pos < 0 ) && (pos > this.length)) {
        throw new Error ("OutOfBounds")
      } else {
        return this.items[pos]
      }
    }

    max() {
      if (!this.length) {
        throw new Error("EmptySortedList")
      }
      return Math.max(...this.items)
    }

    min() {
      if (!this.length) {
        throw new Error("EmptySortedList")
      }
      return Math.min(...this.items)
    }

    average() {
      if (!this.length) {
        throw new Error("EmptySortedList")
      }
      return (this.sum() / this.length)
    }

    sum() {
      if (!this.length) {
        return 0
      }
      const addition = (acc, currentValue) => acc + currentValue;
      return this.items.reduce(addition)
    }

  };
  
  module.exports = SortedList;