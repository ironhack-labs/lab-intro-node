class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort( (a, b) => a - b );
    return this.length = this.items.length;
  }
  get(pos) {
    pos = pos - 1;
    if (this.items[pos] === undefined) throw new Error('OutOfBounds');
    return this.items[pos];
  }
  max() {
    const max = this.items.length - 1;
    if (this.items == "") throw new Error('EmptySortedList');
    return this.items[max];
  }
  min() {
    if (this.items == "") throw new Error('EmptySortedList');
    return this.items[0];
  }
  average() {
    if (this.items == "") throw new Error('EmptySortedList');
    return this.sum() / this.items.length;
  }
  sum() {
    return this.items.reduce( (a, b) => { return a + b }, 0);
  }
};

module.exports = SortedList;

/**************/
/* VALIDATION */
/**************/

// sl = new SortedList();
// sl.add(1);
// sl.add(30);
// sl.add(20);
// sl.add(10);
// sl.add(15);
// console.log(sl);
// console.log(sl.get(3));
// console.log(sl.max());
// console.log(sl.min());
// console.log(sl.average());
// console.log(sl.sum());