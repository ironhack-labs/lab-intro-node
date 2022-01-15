class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;

    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos > this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
    
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.items.slice(-1)[0]
    }
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.items.slice(0)[0]
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.sum(this.items)/ this.length
    }
  }
}

module.exports = SortedList;
