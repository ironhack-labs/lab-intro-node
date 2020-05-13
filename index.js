class SortedList {
  constructor() {
    //Iteration 1: constructor()
    this.items = [];
    this.lenght = this.items.length;
  }
  //Iteration 2: add(item)
  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }
  //Iteration 3: get(pos)
  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos - 1];
    } else {
      throw Error("OutOfBounds");
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
