class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else {
      for(let i = 0; i < this.items.length; i++) {
        if (pos === i) {
          return this.items[i];
        }
      }
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0;
    sum = this.items.reduce(function(a,b) {
      return a+b;
    }, 0);
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
      }
      return this.sum() / this.items.length;
      }
  }


module.exports = SortedList;
