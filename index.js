class SortedList {
  constructor() {
    //Iteration 1: constructor()
    this.items = [];
    this.lenght = 0;
  }
  //Iteration 2: add(item)
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.lenght = this.items.length;
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
