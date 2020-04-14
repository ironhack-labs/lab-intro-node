class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {

    this.length = this.items.push(item)
    this.items.sort((a, b) => a - b)

  }



  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos]

  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let max = 0
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] > max) {
          max = this.items[i]
        }
      }
      return max
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let min = this.items[0]
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] < min) {
          min = this.items[i]
        }
      }
      return min
    }
  }

  sum() {
    let sum = 0
    if (this.length === 0) {
      return sum
    } else {
      for (let i = 0; i < this.length; i++) {
        sum += this.items[i]
      }
      return sum
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;