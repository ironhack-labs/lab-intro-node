class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.items.length == 0) {
      this.items.push(item);
    } else if (item <= this.items[0]) {
      this.items.unshift(item);
    } else if (item >= this.items[this.items.length-1]) {
      this.items.push(item);
    } else {
      for (let i = 0; i < this.items.length-1; i++) {
        if (item > this.items[i] && item < this.items[i+1]) {
          this.items.splice(this.items.indexOf(i+1), 0, item);
        }
      }
    }
  this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      // console.log(this.items[pos]);
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    return this.items.reduce(function(a,b){
          return a + b
        }, 0);
  }

  avg() {
    if (this.items.length == 0 || this.items.length == undefined) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce(function(a,b){
        return a + b
      }, 0)/this.length;
    }
  }
}

module.exports = SortedList;
