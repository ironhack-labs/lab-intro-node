class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.length - 1) {
      throw new Error('OutBounds');
    }

    return this.items[pos]
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((acc, cv) => acc + cv, 0);
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (this.sum(this.items)/this.length);
    }
  }
}

module.exports = SortedList;
