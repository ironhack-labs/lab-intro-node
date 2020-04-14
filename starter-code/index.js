class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {

    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    })
    this.length = this.items.length;
  }

  get(pos) {

    if (pos > this.items.length) {
      throw new error("OutOfBounds");
    }
    return (this.items[pos]);
  }


  max() {
    if (this.items.length === 0) {
      throw new error("EmptySortedList")
    }
    return (Math.max.apply(null, this.items))
  }

  min() {
    if (this.items.length === 0) {
      throw new error("EmptySortedList")
    }
    return (Math.min.apply(null, this.items))
  }

  sum() {
    return this.items.reduce(function (a, b) {
      return a + b
    }, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new error("EmptySortedList")
    }
    return (this.items.reduce(function (a, b) {
      return a + b
    }, 0)) / this.items.length;

  }
}

module.exports = SortedList;