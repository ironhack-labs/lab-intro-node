class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos]
    } else {
      throw (error("Out of Bound"))
    }
  }

  max() {
    if (this.items.length === 0) {
      throw (error('EmptySortedList'))
    }
    return this.items.pop();
    //return Math.min(this.items)
  }

  min() {
    if (this.items.length === 0) {
      throw (error('EmptySortedList'))
    }
    return this.items.shift();
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, currentValue) => acc + currentValue, 0);
  }


  avg() {
    if (this.items.length === 0) {
      throw (error('EmptySortedList'))
    }
    return this.sum() / this.items.length;
  }

}

module.exports = SortedList;
