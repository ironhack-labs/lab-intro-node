class SortedList {
  constructor(items, length) {
    this.items = [] 
    this.length = 0;
  }

  add(item) {
    this.items.push(item); 
    this.items.sort(function (a, b) {return a - b}); 
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds'); 
    } 
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.sort(function (a, b) {return a - b})[this.items.length - 1];
  }

  min() {
    if (this.length === 0) { 
      throw new Error('EmptySortedList');
    } 
    return this.items.sort(function (a, b) { return a - b})[0];
  }

  sum() { 
    if (this.length == 0) {
      return 0
    } 
    return this.items.reduce((sum, element) => sum + element)
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList'); 
    } else {
      return this.sum()/this.items.length;
    }
  }
}

module.exports = SortedList;
