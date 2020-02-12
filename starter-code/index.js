class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b});
  }

  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    }
    else {
          return this.items[pos];
        }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return Math.max(...this.items);
    }
    
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce(function(a, b){return a + b}, 0);
  }

  avg() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce(function(a, b){return a + b}, 0) / this.items.length;
  }
}

module.exports = SortedList;
