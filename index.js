class SortedList {

  constructor() {
    this.items = []
    this.length = this.items.length
  }


  add(item) {
    this.items.push(item)

    this.items.sort((a, b) => {
      return a - b
    })

    this.length++
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      const sumNumbers = this.items.reduce((acc, elm) => {
        return acc + elm
      })
      return sumNumbers
    }

  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const sumNumbers = this.items.reduce((acc, elm) => {
        return acc + elm
      })
      return sumNumbers / this.items.length
    }
  }
}

module.exports = SortedList;
