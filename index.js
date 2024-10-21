class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }

  add(item) {

    let i;

    for (i = 0; i < this.items.length; i++) {
      if (this.items[i] >= item) {
        break;
      }
    }
    this.items.splice(i, 0, item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.items.length - 1]
    }
  }


  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }

  sum() {
    let total = 0

    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i]
    }
    return total

  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return (this.sum() / this.items.length)
  }
}

module.exports = SortedList;
