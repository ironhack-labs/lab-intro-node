class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b});
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] !== undefined){
      return this.items[pos];
    }
    else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length !== 0) {
      let max = Math.max(...this.items);
      return max;
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length !== 0) {
      let max = Math.min(...this.items);
      return max;
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    }
    else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    else {
      return this.items.reduce((a, b) => (a + b)) / this.length;
    }
  }
}

module.exports = SortedList;
