class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
      this.items.push(item);
      this.length = this.items.length;
      this.items.sort(function(a, b) {
        return a - b;
      });
  }

  get(pos) {
    if (pos >= this.length) {
     throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    this.items.sort(function(a, b) {
      return a - b;
    });
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length-1];
  }

  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
    if (this.length === 0) {
      return 0;
    }
    sum = sum + this.items[i];
    }
    return sum;
  }

  avg() {
    let sum = 0;
    this.length = this.items.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
      } 
    else 
      return this.sum()/this.length;
  }  
}

module.exports = SortedList;
