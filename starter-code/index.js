class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)

  }

  get(pos) {
    if (pos <= this.items.length) {
      let a = this.items[pos]
      return a
    } else {
      throw new Error("OutOfBounds")
    }
  }

  max() {
    let copy
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      copy = [...this.items]
      copy.sort((a, b) => b - a)
      return copy[0]
    }
  }

  min() {
    let copy1;

    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      copy1 = [...this.items]
      copy1.sort((a, b) => a - b)
      return copy1[0]
    }
  }


  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let average = this.items.reduce((acc, elm) => (acc + elm))
      this.length = this.items.length
      return average / this.length
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      let a = this.items.reduce((acc, elm) => (acc + elm))
      return a
    }
  }
};
let pepe = new SortedList()
module.exports = SortedList;