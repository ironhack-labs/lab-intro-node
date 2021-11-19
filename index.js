class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if(item > this.items[this.length - 1] || this.length === 0) {
      this.items.push(item);
    }

    for (let i = 0; i < this.length; i++) {
      if(this.items[i] > item) {
        this.items.splice(i, 0, item);
        break;
      }
    }
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
