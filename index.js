class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){
      return a-b
    })
    this.length++
  }

  get(pos) {
    if (!this.items.includes(pos)) {
      throw new Error("OutOfBounds");
    } else {
      return this.items.indexOf(pos)
    }

  }

  max() {
    if (this.items.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0 
    } else {
      return this.items.reduce((acc, curr) => acc + curr,
      0,)
    }
    
  }

  avg() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");

    } else {
      const sum = this.items.reduce((acc, curr) => acc + curr,
      0,)
      return sum/this.items.length
    }
  }
}

module.exports = SortedList;
