class SortedList {
  constructor(items) {
    this.items = []
    this.length = this.items.length
  }


  add(item) {

    this.length = 1
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b
    })

  }

  get(pos) {

    if (pos >= this.items.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items.slice(pos, pos + 1)
    }

  }

  max() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.slice(-1)
    }

  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.slice(0, 1)
    }

  }

  sum() {
    return this.items.length === 0 ? 0 : this.items.reduce((a, b) => (a + b), 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.items.length
  }
}

module.exports = SortedList;
