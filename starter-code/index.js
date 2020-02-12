class SortedList {
  constructor() {
    this.items = [];
    this.lenght = this.items.lenght;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => {
      return a - b;
    });

    this.length = this.items.length;
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
