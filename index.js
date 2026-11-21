class SortedList {
  constructor(items, length) {

    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.items.push(item)
    this.length = this.items.length

    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if(pos >= 0 && pos < this.length) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds")
    }
  }

  max() {
    if(this.items.length > 0) {
      return this.get(this.length - 1)
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if(this.items.length > 0) {
      return this.get(0)
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
