class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0 ;
  }

  add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b)
      this.length++
  }

  get(pos) {
    if (this.items[pos] === undefined){throw new Error('OutOfBounds')}
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0){throw new Error('EmptySortedList')}
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0){throw new Error('EmptySortedList')}
    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length === 0){return 0}
    let sum = this.items.reduce((acc , val) => acc + val, 0 )
    return sum
  }

  avg() {
    if (this.items.length === 0){throw new Error('EmptySortedList')}
    let sum = this.items.reduce((acc , val) => acc + val, 0 )
    return sum/this.items.length
  }
}

module.exports = SortedList;
