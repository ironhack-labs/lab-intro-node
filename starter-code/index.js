class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((first, last) => {
      return first - last
    })
    this.length += 1
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      this.items.sort((first, last) => {
        first - last
      })
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      this.items.sort((first, last) => {
        first - last
      })
      return this.items[0]
    }
  }

  sum() {
    let sumArray = 0
    if (this.length === 0) {
      return sumArray = 0
    } else {
      for (let i = 0; i < this.length; i++) {
        sumArray += this.items[i]
      }
      return sumArray
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      // let sumArray = 0
      // if (this.length === 0) {
      //   sumArray = 0
      // } else {
      //   for (let i = 0; i < this.length; i++) {
      //     sumArray += this.items[i]
      //   }
      //   sumArray
      // }
      let avgArray = (this.sum() / this.length)
      return avgArray
    }
  }
}

module.exports = SortedList;