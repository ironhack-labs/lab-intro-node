class SortedList {
  constructor(items, length) {

    this.items = []
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length

  }

  get(pos) {

    return pos < this.length ? this.items[pos] : error("OutOfBounds");


  }

  max() {
    return this.length != 0 ? Math.max(...this.items) : error("EmptySortedList")

  }

  min() {
    return this.length != 0 ? Math.min(...this.items) : error("EmptySortedList")

  }

  sum() {

    return this.length != 0 ? this.items.reduce((acc, elm) => acc + elm) : 0

  }

  avg() {

    return this.length != 0 ? this.sum() / this.length : error("EmptySortedList")

  }
}

module.exports = SortedList;