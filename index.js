class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos<0 || pos>this.items.length-1) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(null,this.items)
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min.apply(null,this.items);
  }

  sum() {
    return this.items.reduce((acc,curr) => acc + curr,0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum(this.items)/this.items.length;
  }
}

module.exports = SortedList;
