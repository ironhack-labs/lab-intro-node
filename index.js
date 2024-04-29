class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {

    this.items.push(item)

    this.items.sort((a, b) => {
      return a - b
    })

    this.length++
  }

  get(pos) {

    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds")
    }

    else {
      return this.items[pos]
    }
  }


  max() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    else {

      let maxNumber = Math.max(...this.items)
      return maxNumber

    }

  }

  min() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    else {

      let minNumber = Math.min(...this.items)
      return minNumber

    }
  }

  sum() {

    //let sumTotal = 0

    // this.items.forEach((eachItem) => {
    //   sumTotal += eachItem
    // })
    // return sumTotal

    const totalSum = this.items.reduce((acc, sumTotal) => {
      return acc + sumTotal
    }, 0)
    return totalSum


  }

  avg() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    else {

      const total = this.sum()
      return total / this.items.length
    }
  }


}
module.exports = SortedList;
