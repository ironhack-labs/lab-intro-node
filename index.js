class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    } 
    return this.items[pos]
  }

  max() {
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    this.sum = 0;
    for (let i=0; i<=this.items.length; i++){
      this.sum += i
    }
    return this.sum
  }

  avg() {
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    }
    this.sum = 0;
    for (let i=0; i<=this.items.length; i++){
      this.sum += i
    }
    return this.sum/this.items.length;
  }
}

module.exports = SortedList;

