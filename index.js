class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {

    this.items = [...this.items, item]
    this.items.sort((a, b) => {
      a - b
      return a - b
    })
    this.length++
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    let maxValue = this.items[0]

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }

    this.items.forEach((eachValue) => {
      if (eachValue > maxValue) {
        maxValue = eachValue;
      }
    })

    return maxValue;
  }


  min() {

    let minValue = this.items[0]

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }

    this.items.forEach((eachValue) => {
      if (eachValue < minValue) {
        minValue = eachValue
      }
    })
    return minValue
  }

  sum() {

    let sum = 0
    this.items.forEach((eachValue) => {
      sum += eachValue
    })
    return sum
  }

  avg() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }

    let sum = 0
    this.items.forEach((eachValue) => {
      sum += eachValue
    })
    return sum / this.length
  }
}



module.exports = SortedList;
