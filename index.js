class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){
      return a - b;
    })
    this.length = this.items.length
  }
  get(pos) {
    if (pos > this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }
  max() {
    if (!this.length){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }
  min() {
    if (!this.length){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }
  sum() {
    if (!this.length){
      return 0;
    } else {
      return this.items.reduce((acc, next) => acc + next);
    }
  }
  avg() {
    if (!this.length){
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((acc, next) => acc + next)/this.length;
    }
  }
}

module.exports = SortedList;
