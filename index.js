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
  //Bonus iterations
  //Iteration 6: sum()
  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }
//Iteration 7: avg()
  avg() {
    return !this.items.length
      ? (() => {
          throw new Error("EmptySortedList");
        })()
      : this.items.reduce((e, acc) => e + acc) / this.items.length;
  }
}

module.exports = SortedList;
