class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) { return a - b })
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos]
  }
  max() {
    let highest = 0
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    else {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] > highest) {
          highest = this.items[i]
        }
      }
      return highest
    }
  }
  min() {
    let lowest = 23599832506
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    else {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] < lowest) {
          lowest = this.items[i]
        }
      }
      return lowest
    }
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      let sumVar = 0
      for (let i = 0; i < this.length; i++) {
        sumVar += this.items[i]
      }
      return sumVar / this.length
    }
  }
  sum() {
    if (this.length == 0) {
      return 0
    } else {
      let sumVar = 0
      for (let i = 0; i < this.length; i++) {
        sumVar += this.items[i]
      }
      return sumVar
    }
  }

};

module.exports = SortedList;