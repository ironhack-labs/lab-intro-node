class SortedList {
  constructor(item, length) {

    this.items = []
    this.length = this.items.length

  }

  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length

  }

  get(pos) {

    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBouns")

    } else
      return this.items[pos];

  }


  max() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }


  }

  min() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }


  }

  sum() {

    const sum = this.items.reduce((acc, currentValue) => {
      return acc + currentValue
    }, 0)

    return sum

  }

  avg() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length
    }



  }

}




module.exports = SortedList;
