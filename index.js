class SortedList {
  constructor (items, length) {
      this.items = [];
      this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    }

    for (let i=0, i < this.items.length; i++) {
      if (pos == i) {
        return items[i]
      }
    }
  }

  max() {
    let max = 0;

    if[items.length === 0] {
      throw new Error('EmptySortedList');
    }

    for (let i = 0; i < this.items.length; i++) {
      if (items[i] > max) {
        max = items[i];
      }
      return max;
    }
  }

  min() {
    let min = items[0];

    if[items.length === 0] {
      throw new Error('EmptySortedList');
    }
    
    for (let i = 0; i < this.items.length; i++) {
      if (items[i] < min) {
        min = items[i];
      }
      return min;
    }
  }

  sum() {
    sum = 0;

    for (let i = 0; i < this.items.length; i++) {
      sum += items[i];
    }
    return this.sum;
  }

  avg() {
    let total = sum(items);
    let avg = total/this.items.length;
    return avg;
  }
}

module.exports = SortedList;
