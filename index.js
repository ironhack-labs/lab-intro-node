class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length; //add single value to sorted list
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {}

  max() {
    //spread operator
    math.max(...this.items);
  }

  min() {
    min.max(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
