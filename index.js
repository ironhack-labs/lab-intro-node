class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }

  add(item) {
    this.item.push(item);
    this.item.sort((a, b) => a - b);
    this.length = this.item.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    } else return this.item[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.item[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    } else return this.item[0];
  }

  sum() {
    return this.item.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.sum() / this.length;
  }
}

module.exports = SortedList;

const list = new SortedList();

list.add(3);
list.add(1);
list.add(7);
console.log(list.item);
console.log(list.length);
console.log(list.get(1));
//console.log(list.get(5));
console.log(list.max());
console.log(list.sum());
console.log(list.avg());
