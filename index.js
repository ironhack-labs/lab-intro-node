class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length++
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < this.length){
        return this.items[pos]
    } else {
        throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.items === 0) {
        throw new Error("EmptySortedList")
    } else {
        return Math.max(...this.items)
    }
  }

  min() {
    if (this.items) {
        return Math.min(...this.items)
    } else {
        throw new Error("EmptySortedList")
    }
  } 

  sum() {
    const initValue = 0
    return this.items.reduce((preVal, currentVal) => preVal + currentVal, initValue)
  }

  avg() {
    if (this.length) {
        return this.sum() / this.items.lenght
    } else {
        throw new Error("EmptySortedList")
    }
  }
}

module.exports = SortedList;
