class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a -b);
    this.length += this.items.length;
    
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let maxVal = Math.max(...this.items);
    return maxVal;
  }

  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let minVal = Math.min(...this.items);
    return minVal;
  }

  sum() {
    if(this.items.length === 0) {
      return 0;
    }

    let sum = this.items.reduce(function (previous, current) {
     return previous + current;
    });
    return sum;
  }

  avg() {
    let length = this.items.length;
    if(length === 0) {
      throw new Error('EmptySortedList');
    }
    let avg = this.items.reduce(function (previous, current) {
     return previous + current / length;
     });
     return Math.floor(avg);
  }
}

module.exports = SortedList;
