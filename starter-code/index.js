class SortedList {
  constructor() {
      this.items = [];
      this.length = 0;
  }

  add(item) {
      this.items.push(item);
      this.items.sort( (a,b) => a - b );
      this.length++;
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;