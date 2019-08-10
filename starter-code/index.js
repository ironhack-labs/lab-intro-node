class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    try {
      return this.items[pos];
    } catch (error) {
      return 'OutOfBounds';
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[0];
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return (this.items.reduce((acum, item) => acum + item, 0) / this.items.length);
  }

  sum() {
    return this.items.length === 0 ? 0 : this.items.reduce((acum, item) => acum + item, 0);
  }

};
  module.exports = SortedList;

//   let sortedList = new SortedList();
// sortedList.add(x);  
