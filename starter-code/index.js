class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }


  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b
    })
    this.length = this.items.length;
  }


  get(pos) {
    if (pos > this.length - 1 || pos < 0) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }
  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[0]
    }
  }


  sum() {
    if (this.length == 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }

  avg() {
    if (this.length == 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length
    }
  }
}


module.exports = SortedList;
