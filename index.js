class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      const max = this.items.reduce((a, b) => a>b? a: b)
      return max
    }
    
  }

  min() {
    if (this.length === 0){
    throw new Error('EmptySortedList');
  } else {
    const min = this.items.reduce((a, b) => a>b? b: a)
    return min
  }
}

  sum() {
    const sum = this.items.reduce((a, b) => a+b, 0)
    return sum
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
    const avg = this.sum() / this.length
    return avg
    }
  }
}

module.exports = SortedList;
