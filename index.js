class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort (function (a,b){return a-b})
  }

  get(pos) {
    if(pos > this.length){
      throw new Error('OutOfBounds');
    } else {
    return this.items[pos]
  }
  }

  max(items) {
    if(this.length > 0){
    return Math.max(...this.items)
  } else {
    throw new Error('EmptySortedList');
  }
  }

  min(items) {
    if(this.length > 0){
    return Math.min(...this.items)
  } else {
    throw new Error('EmptySortedList');
  }}

  sum(items) {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg(length) {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return (this.items.reduce((a, b) => a + b, 0))/this.length;
    }
  }
}

module.exports = SortedList;
