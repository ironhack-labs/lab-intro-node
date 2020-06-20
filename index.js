class SortedList {
  constructor() {
    this.items = []
    this.length = 0

  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length
  }

  get(pos) {
    const item = this.items[pos]
    if (this.items[pos]) {
      return item
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items.pop()
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[0]
  }

  sum() {
    let sumItems = 0

    if (this.items.length === 0) {
      return 0;
    }

    this.items.forEach(e => {
      console.log(e);
      sumItems += e
    })

    console.log(sumItems);

    return sumItems
  }

  avg() {
    let sumItems = 0

    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    this.items.forEach(e => {
      console.log(e);
      sumItems += e
    })

    return sumItems / this.length
  }
}

module.exports = SortedList;
