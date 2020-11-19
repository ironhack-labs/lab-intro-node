class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    }
  );
  this.length++;
}

  get(pos) {
    if (pos > this.length){
    throw new Error('OutOfBounds');
  } else {
    return this.items[pos];
  }
}

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce(function(a,b){
        return Math.max(a, b);
      }); 
    }
  }
  //return Math.max(...this.items)

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce(function(a, b) {
        return Math.min(a, b);
      });
  }
}
  //return Math.min(...this.items)

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      let totalSum = this.items.reduce(function(a,b) {
        return a + b;
      }, 0);
      return totalSum;
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let totalSum = this.items.reduce(function(a, b) {
        return a + b;
      }, 0);
      return totalSum/this.length;
  }
}

module.exports = SortedList;
