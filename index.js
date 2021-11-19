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
      return this.items[this.length - 1];
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, cv) => {
      return acc + cv;
    }, 0)
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
