class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = 0;
  }

  add(item) {

    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {

    if (pos < 0 || pos >= this.length) {
      
      throw new Error("OutOfBounds")
    }

    return this.items[pos]
  }

  max() {

    if (this.length === 0) {

      throw new Error("EmptySortedList")
    }

    return this.items[this.length - 1]
  }

  min() {

    if (this.length === 0) {

      throw new Error("EmptySortedList")
    }

    return this.items[0]
  }

  sum() {

    if (this.length === 0) {

      return 0
    }

    let total = 0

    this.items.forEach((item) => {
      
      total += item
    })

    return total
  }

  avg() {

    if (this.length === 0) {

      throw new Error("EmptySortedList")
    }

    let average = 0

    this.items.forEach((item) => {

      average += item / this.items.length
    })

    return average
  }
}

module.exports = SortedList;
