class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++
    this.items.sort((a, b) => a - b);

  }

  get(pos) {
    const value = this.items[pos];
    if (pos > this.items.length || pos < this.items.length){ 
    throw new Error('OutOfBounds');
  } else {
    return value;
  }
  }

  max() {
    const maxValue = this.items.reduce((a, b) => Math.max(a, b))
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return maxValue;
    }
  }

  min() {
    const minValue = Math.min(...this.items)
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return minValue;
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
    
   if (this.items.length === 0) {
      return 0;
    }
  }

  avg() { 
    if (this.items.length === 0) {
    throw new Error('EmptySortedList')
    }
    else {
      return this.sum()/this.items.length;
    }
 
  }
}

module.exports = SortedList;
