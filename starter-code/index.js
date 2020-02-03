class SortedList {
  constructor() {
    this.items = []
    this.length = 0


  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b
    });
    this.length++
  }

  get(pos) {


    for (var i = 0; i < this.items.length; i++) {
      if (pos > this.items.length)
        throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1]

  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    }
    return this.items.reduce((acc, elm) => acc + elm)
  }

  avg() {
    return this.items.reduce((acc, elm) => acc + elm) / this.items.length
  }
}

module.exports = SortedList;
