class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push[item]
    this.items.sort((x, y) => x-y)
    this.length++
  }
    
  get(pos) {
    if(pos >= this.length || pos < 0) throw new Error('OutOfBounds')
    return this.items[pos]
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList')
    return this.items[pos]
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items.reduce((a, b) => Math.min(a, b));
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, el) => acc + el, 0);
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
