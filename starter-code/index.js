class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a - b});
    this.lenght++;
  }

  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    }
    else {
          return this.items[pos];
        }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
