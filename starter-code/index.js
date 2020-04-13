class SortedList {
  constructor() {
    this.items = []
    this.length = 0

  }
  
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)

    return this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList"); 
    }
    this.items.sort((a, b) => b - a)
    return this.items[0]
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort((a, b) => a - b)
    return this.items[0]
  }

  sum() {
    if (this.length === 0) {
      return 0
    }
    return this.items.reduce((acum, elm) => acum + elm)
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    
    let avg = this.sum() / this.length
    return avg
    
  }
}

module.exports = SortedList;
