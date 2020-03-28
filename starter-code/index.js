class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
this.items.push(item)
this.length = this.items.length
this.items.sort((a,b) => a-b)
  }

  get(pos) {
    if (pos > this.length) {throw new Error("OutOfBounds");}
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {throw new Error("EmptySortedList");}
   return Math.max.apply(Math, this.items)
  }

  min() {
    if (this.length === 0) {throw new Error("EmptySortedList");}
    return Math.min.apply(Math, this.items)
  }

  sum() {
    if (this.length === 0) {return 0}
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.length === 0) {throw new Error("EmptySortedList");}
    return (this.items.reduce((a, b) => a + b, 0)/this.length)
  }
}

module.exports = SortedList;
