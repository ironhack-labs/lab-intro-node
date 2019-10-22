class SortedList {

  constructor() {
    this.items = []
  }

  add(item) {
    this.items = [...this.items, item]
    // ahora se ordena, para el test add & get
    this.items.sort((a,b) => a - b)
  }

  get length() { // Selector
    return this.items.length
  }

  get(pos) {
    try {
      return this.items[pos]
    }
    catch (err) {
      return err.message
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max.apply(null, this.items)
  }

  min() { 
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min.apply(null, this.items)
  }

  average() { 
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.length
  }

  sum() { 
    if (this.items.length === 0) {
      return 0
    }
    return this.items.reduce((acc, el) => acc + el)

  }
};

module.exports = SortedList;