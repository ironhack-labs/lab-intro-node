class SortedList {
  constructor(items, length, item) {
      this.items = [];
      this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
      
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error ('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    } else {
      var valMax = Math.max.apply(null, this.items);
    }
    return valMax;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    } else {
      var valMin = Math.min.apply(null, this.items);
    }
    return valMin;
  }

  sum() {
    let total= 0;
    this.items.forEach((item) => total += item)
    return total;

  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
    return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
