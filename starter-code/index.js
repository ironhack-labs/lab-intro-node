class SortedList {
  constructor() {

    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => a - b)

    return this.length++
  }

  get(pos) {

    if (pos > this.length) throw new Error("OutOfBounds")

    return this.items[pos]

    //throw (pos > this.length) ? new Error("OutOfBounds") : this.items[pos]

  }

  max() {

    if (this.length <= 0) throw new Error("EmptySortedList")

    // Math.max.apply(null, this.items)   

    return Math.max(...this.items)
  }

  min() {

    if (this.length <= 0) throw new Error("EmptySortedList")

    return Math.min(...this.items)
  }

  sum() {
    // Math.sum(this.items)

    return this.length > 0 ? this.items.reduce((a,b) => a + b, 0) : 0
  }

  avg() {


    if (this.length <= 0) throw new Error("EmptySortedList")

    return this.sum()/this.length
    
    //return this.length > 0 ? this.sum()/this.length : 0
  }
}

module.exports = SortedList;
