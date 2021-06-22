class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.length ++
    this.items.sort(  (a, b) => a - b
    );
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds')
    } else {return this.items[pos]}
    
  }

  max() {
    if (this.items.length === 0) 
      throw new Error('EmptySortedList')
     return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) 
      throw new Error('EmptySortedList')
     return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0)
  }

  avg() {
    if (this.items.length === 0) 
    throw new Error('EmptySortedList')
    return this.items.reduce((acc, val) => acc + val, 0) / this.items.length
  }
}


module.exports = SortedList;
