class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length++;
  }
  get(pos) {
    if(pos > this.length) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos - 1];
  }
  max() {
    if(this.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if(this.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    let result = 0;
    if(this.length > 0) {
      result = this.items.reduce(function(accu,num) {
        return accu + num;
      });
    }
    return result;
  }
  average() {
    if(this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
};

module.exports = SortedList;
