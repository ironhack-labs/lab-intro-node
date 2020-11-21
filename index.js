class SortedList {
  constructor() {
    this.items=[];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return a-b
    })
  }

  get(pos) {
    throw new Error('OutOfBounds');
  }

  max() {
    throw new Error('EmptySortedList');
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
