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
    if (this.items.length >= 2) this.items.sort((a, b) => a - b);
  }
  //Iteration 3: get(pos)
  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw Error("OutOfBounds");
    }
  }
  //Iteración 4: max ()
  max() {
    return !this.items.length
      ? (() => {
          throw new Error("EmptySortedList");
        })()
      : Math.max(...this.items);
  }
  //Iteración 4: min ()
  min() {
    return !this.items.length
      ? (() => {
          throw new Error("EmptySortedList");
        })()
      : Math.min(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
