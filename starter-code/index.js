class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

  }
  get(pos) {
    if (this.items.length) {
      return this.items[pos];
    } else {
      return 'Error';
    }
  }
  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");

    }
    else {
      return this.items[this.length -1];
  }
  }
  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");

    }
    else {
      return this.items[0];
  }
  }
  sum() {
    if (!this.items.length) {
      return 0;
    }
    else {
      return this.items.reduce(function(a,b){
        return a + b;
      }, 0);
}
  
  }
  average() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    else {
     return this.sum() / this.items.length;
}
  }
}

module.exports = SortedList;