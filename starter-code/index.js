class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (pos > this.items.length) throw new Error("Outbounds")
    return pos;
  }

  max() {
    if (this.items.length == 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);  
  }

  min() {
    if (this.items.length == 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
   }

  sum() {
    let sumArray = this.items.reduce((a, b) => a +b, 0);
    return sumArray;
   }

  avg() {  
    if (this.items.length == 0) throw new Error("EmptySortedList");
    return this.sum() / this.items.length;
   }
}

module.exports = SortedList;
