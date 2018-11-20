class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort(function (a, b) {
      return a - b
    })
  }

  get(pos) {
    return this.items[pos - 1]
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return (this.items.reduce((accumulator, currentValue) => accumulator + currentValue))/this.length
    }
  }


  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
  }
};

module.exports = SortedList;
