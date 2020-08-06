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
    this.length++;
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
  } else {
    return Math.max(...this.items)
  }
}

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
  } else {
    return Math.min(...this.items)
  }
  }

  sum() {
    if (this.length == 0) {
      return 0;
    } else {
      var reducer = function(accumulator, currentValue) {
        return accumulator + currentValue;
      };
    return this.items.reduce(reducer);
    }
  }


  avg() {}
}

module.exports = SortedList;
