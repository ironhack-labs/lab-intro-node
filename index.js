class SortedList {
  constructor (items, length) {
      this.items = [];
      this.length = this.items.length;
  }

  add(item) {
    let start = 0;
    let end = this.items.length;

    if (item < this.items[0]) {
      this.items.unshift(item);
      return;
    }

    else if (this.items[this.length-1]) {
      this.items.push(item);
      return;
    }

    while (end - start > 1) {
      let midpoint = Math.ceil((start + end) / 2 );
      if (this.items[midpoint] < item) {
        start = midpoint;
      }
      else {
        end = midpoint;
      }
    }

    this.items.splice(end, 0, item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];

    // for (let i=0, i < this.items.length; i++) {
    //   if (pos == i) {
    //     return items[i]
      }

  max() {
  //   let max = 0;

    if[items.length === 0] {
      throw new Error('EmptySortedList');
    }

    return Math.max(...this.items);

    // for (let i = 0; i < this.items.length; i++) {
    //   if (items[i] > max) {
    //     max = items[i];
    //   }
    //   return max;
    // }
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

    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    }

    let total = sum(items);
    let avg = total/this.items.length;
    return avg;
  }
}

module.exports = SortedList;
