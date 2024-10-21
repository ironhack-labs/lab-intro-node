class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.length <= 0 || pos > this.length){
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length <= 0){
      throw new Error("Empty SortedList");
    }
    else {
      return this.items.reduce((a, b) => Math.max(a, b), -Infinity)
    }
  }

  min() {
    if (this.length <= 0){
      throw new Error("Empty SortedList");
    }
    else {
      return this.items.reduce((a, b) => Math.min(a, b), +Infinity)
    }
  }

  sum() {
    if (this.length <= 0) {
      return 0;
    }
    else {
      return this.items.reduce(function (acc, value) {
        return acc + value
      }, 0);
    }
  }

  avg() {
    
    if (this.length <= 0) {
      throw new Error("Empty SortedList");
    }
    const result = this.items.reduce(function (acc, value) {
    return acc + value
    }, 0); 
    return result / this.length;
  }
}

module.exports = SortedList;
