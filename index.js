class SortedList {
  constructor() {
    this.items = []
    this.length = 0

  }

  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length

  }

  get(pos) {

    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos]
  }

  max() {


    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items)

  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }

    return Math.min(...this.items)

  }

  sum() {


    const sum = this.items.reduce((acc, curValue) => {
      return acc + curValue
    }, 0)

    return sum
  }


  avg() {

    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }

    let AvgNumber = 0;

    AvgNumber = this.sum() / this.length

    return AvgNumber

  }
}

module.exports = SortedList;
