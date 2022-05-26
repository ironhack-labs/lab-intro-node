class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let max;

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      max = Math.max(...this.items);
    }
    return max;
  }

  min() {
    let min;

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      min = Math.min(...this.items);
    }
    return min;
  }

  sum() {
    let sum=0

    this.items.forEach(item => {
      sum = sum + item;
    })

    return sum
  }

  avg() {

    let avg = 0;

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      avg = this.sum()/this.length
    }
    
    return avg;
  }
}

module.exports = SortedList;
