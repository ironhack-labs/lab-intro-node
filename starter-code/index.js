class SortedList {
    constructor(items, length) {
      this.items = []
    }

    get length () {
      return this.items.length;
    }

    add(item) {
      this.items.push(item)
      this.items.sort(function(a,b) {return a-b})
    }
    
    get(pos) {
      if (pos >= this.length) {
        return Error("OutOfBounds")
      }
      else {return this.items[pos]}
    }

    max() {
      if (this.length > 0) {
        return this.items[this.length - 1]
      }
      else {throw new Error("EmptySortedList")}
    }

    min() {
      if (this.length > 0) {
        return this.items[0]
      }
      else {throw new Error("EmptySortedList")}
    }

    average() {
      if (this.length > 0) {
        return (this.items.reduce((acc, e) => acc + e, 0)) / this.length
      }
      else {throw new Error("EmptySortedList")}
    }

    sum() {
      if (this.length > 0) {
        return this.items.reduce((acc, e) => acc + e, 0)
      }
      else {return 0}
    }
  };
  
  module.exports = SortedList;