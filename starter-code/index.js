class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    // this.items[pos] ? this.items[pos] : throw new Error("OutOfBounds");
    this.length = this.items.length

    if (this.length >= pos) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    this.length = this.items.length

    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    this.length = this.items.length
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    return this.length == 0 ? 0 : (this.items.reduce((acc, elm) => acc + elm))

  }

  avg() {
    let reduce = this.items.reduce((acc, elm) => acc + elm)
    // return reduce / this.items.length

    this.length = this.items.length
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return reduce / this.items.length
    }

  }
}

module.exports = SortedList;
