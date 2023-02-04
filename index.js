class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let i = 0;
    while (i < this.items.length && this.items[i] < item) {
    i++;
  }
  this.items.splice(i, 0, item);
  this.length = this.items.length;
  }
get(pos) {
  if (pos > this.items.length) {
    throw new Error('OutOfBounds');
  } else {
  return this.items[pos]
  }
}

max() {
  if (this.items.length === 0) {
      throw new Error('EmptySortedList');
  }

  return Math.max(...this.items);
}


min() {  
  if (this.items.length === 0) {
    throw new Error('EmptySortedList');
  }

  return Math.min(...this.items);
}

  // sum() {}

  // avg() {}

}
module.exports = SortedList;
// const list = new SortedList();
