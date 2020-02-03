class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort(function(a,b) {return a - b})
    this.length = this.items.length
    
  }

  get(pos) {
    if(pos > this.length) {
      throw new Error("OutOfBounds")
    } else if(pos <= 0) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if(this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if(this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }

  sum() {
    if(this.length == 0) {
      return 0
    } else {
      return this.items.reduce((acc, elm) => acc + elm)
    }
  }

  avg() {
    if(this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;
