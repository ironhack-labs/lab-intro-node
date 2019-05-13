class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function (a, b) {
      return a - b;
    });

  }
  get(pos) {
    //You should also provide a length property that gives the length of the list.

    return this.items[pos - 1];
  }
  max() {
    if (this.length == 0)
      throw new Error('EmptySortedList');
    else
      return Math.max(...this.items);
  }
  min() {
    if (this.length == 0)
      throw new Error('EmptySortedList');
    else
      return Math.min(...this.items);
  }
  average() {
    if (this.length == 0)
      throw new Error('EmptySortedList');
    else
      return this.items.reduce((a, b) => a + b) / this.length;
  }
  sum() {
    if (this.length == 0)
      return 0;
    else
      return this.items.reduce((a, b) => a + b);
  }
};

module.exports = SortedList;