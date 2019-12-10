class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }
    
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items = this.items.sort(function(a, b){return a-b});
    
  }

  get(pos) {
    if (pos<this.items.length) return this.items[pos];
    else throw new Error("OutOfBounds");
  }

  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList")
    else return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList")
    //(else return this.item[0];
    else return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    const arrAvg = this.sum() / this.length;
    if (this.length === 0) throw new Error("EmptySortedList");
    else return arrAvg;
  }
}

module.exports = SortedList;

let sortListInst = new SortedList;