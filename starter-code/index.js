class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[0];
  }

  average() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items.reduce((a, b) => a + b, 0) / this.length;
  }

  sum() {
    if (this.length === 0) return 0;
    else return this.items.reduce((a, b) => a + b, 0);
  }
}

// let theList = new SortedList();
module.exports = SortedList;

//
