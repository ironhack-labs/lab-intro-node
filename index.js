class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    const index = this.items.indexOf(pos);
    if (index >= 0) {
      return this.items[index]
    } else {
       throw new Error('OutOfBounds');
    }
   
  }

  max() {
    if (this.items.length ===0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
        throw new Error('EmptySortedList');
    } else {
        return Math.min.apply(null, this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((a,b) => a + b, 0)
    }
  }

  avg() {
    if (this.items.length === 0) {
        throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => a + b) / this.items.length;

    }
  }
}

module.exports = SortedList;
