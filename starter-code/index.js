class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort(function (a, b) {
      return a - b
    });
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    } else {
      this.length = this.items.length;
      return this.items[pos - 1];

    }

  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0];
    }
  }


  sum() {  
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b ) //suma los elementos del array
    }
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let avg = this.sum() / this.items.length;
      return avg
  }
}
};

module.exports = SortedList;