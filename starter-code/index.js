

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a,b) => {return (a-b)});
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) throw new Error("OutOfBounds");
    else return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[0];
  }

  sum() {
    return this.items.reduce((acc,e) => {return acc + e}, 0);
  }

  avg() {
    if (this.length > 0) return this.sum() / this.length;
    else throw new Error("EmptySortedList");
  }
   

}

module.exports = SortedList;

