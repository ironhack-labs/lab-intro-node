class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length = this.items.length;
  }
  get(pos) {
    if(pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else{
      return this.items[pos];
    }
  }
  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else{
      let i = this.items.length - 1;
      return this.items[i];
    }
  }
  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }
  sum() {
    let sum = 0;
    if(this.items.length === 0) {
      return sum;
    } else {
      sum = this.items.reduce((acc, current) => {
      return acc + current;
      })
      return sum;
    }
  }
  avg() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let total = 0;
      for(let i = 0; i < this.items.length; i++) {
        total += this.items[i];
      }
      return total / this.items.length;
    }
  }
}

module.exports = SortedList;
