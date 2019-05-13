class SortedList {
  constructor(item, length) {
    this.item = []
    this.length = this.item.length
  }
  add(item) {
    this.item.push(item)
    this.item.sort((a, b) => a - b)
    this.length = this.item.length
  }
  get(pos) {
    return this.item[pos - 1]
  }
  max() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.item[this.length - 1]

    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.item[0]

    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length
    }

  }
  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.item.reduce((ac, b) => ac + b)
    }
  }

};
module.exports = SortedList;
