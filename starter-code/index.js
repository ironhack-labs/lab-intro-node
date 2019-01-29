class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b)
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if( this.items.length === 0 ) throw new Error("EmptySortedList")
    return Math.max(...this.items)
  }
  min() {
    if( this.items.length === 0 ) throw new Error("EmptySortedList")
    return Math.min(...this.items)
  }
  average() {
    if( this.items.length === 0) throw new Error("EmptySortedList")
    let accumulator = 0
    const sum = this.items.reduce((accumulator,item) => accumulator + item)
    return sum / this.length
  }
  sum() {
    if( this.items.length === 0) return 0
    let accumulator = 0
    const sum = this.items.reduce((accumulator,item) => accumulator + item)
    return sum
  }
};

module.exports = SortedList;
