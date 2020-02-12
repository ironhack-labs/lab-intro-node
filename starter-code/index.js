class SortedList {
  constructor() {


    this.items = []
    this.length = this.items.length;
  }

  add(item) {

    this.items.push(item)
    this.items.sort(function (a, b) { return a - b });
    this.length += 1;
  }

  get(pos) {

    if (pos < 0 || pos >= this.items.length) {

      throw new Error("OutofBounds");

    } else {
      return this.items[pos]
    }
  }

  max() {

    if (this.items.length == 0) {
      throw new Error("EmptySortedList");

    } else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {

    if (this.items.length == 0) {
      throw new Error("EmptySortedList");

    } else {
      return Math.min.apply(null, this.items);
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.items.length == 0) {

      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;


    }


  }
}

module.exports = SortedList;
