class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      if (a > b) { return 1 }
      if (a < b) { return -1 }
      if (a === b) { return 0 }
    })
  }

  get(pos) {
    if (pos <= this.items.length) { return this.items[pos] }
    else { throw new Error('OutOfBounds') }
  }

  max() {
    if (this.items.length === 0) { throw new Error('EmptySortedList'); }
    let max = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > max) { max = this.items[i] };
    }
    return max;
  }

  min() {
    if (this.items.length === 0) { throw new Error('EmptySortedList'); }
    let min = this.items[0];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] <= min) { min = this.items[i] };
      return min
    }

  }

  sum() {
    let sum = this.items.reduce(function (accu, curr) {
      return accu += curr
    }, 0)
    return sum;
  }


  avg() {
    if (this.items.length === 0) { throw new Error('EmptySortedList'); }
    let sum = this.sum();
    return sum / this.items.length;
  }
}


module.exports = SortedList;
