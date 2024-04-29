class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.items = [...this.items, item]

    this.items.sort((a, b) => {
      return a - b
    })

    this.length++


  }

  get(pos) {

    if (this.items.length < pos) {

      throw new Error("OutOfBounds");

    } else {

      return this.items[pos]

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

      const totalSum = this.items.reduce((acc, eachNumber) => {
        return acc + eachNumber
      })

      return totalSum

    }

  }

  avg() {
    if (this.items.length === 0) {

      throw new Error("EmptySortedList");

    } else {
      let sum = 0
      this.items.forEach((eachNumber) => {
        sum += eachNumber
      })
      return sum / this.items.length
    }
  }
}

module.exports = SortedList;
