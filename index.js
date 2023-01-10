class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item);  
      this.items.sort((function (a, b) {return a - b}));
      this.length++
  }

  get(pos) {
    for (let i = 0; i < this.length; i++) {
      if (pos == this.items[i]) {
        return this.items[i]
      }
      else if (pos > this.length) {
        throw new Error('OutOfBounds');
      }
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else if (this.length >= 0) {
    return Math.max(...this.items)
    }
}

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else if (this.length >= 0) {
      return Math.min(...this.items)
    } 
  }

  sum() {
    let sum = 0;
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      }
      return sum;
    }
    else if (this.items.length === 0) {
      return 0;
      throw new Error('EmptySortedList');
    }
  }

  avg() {
    let sum = 0;
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      }
      return sum / this.items.length;
    }
    else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
