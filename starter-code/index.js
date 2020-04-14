class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length++;
  }

  get(pos) {
    if(this.items.indexOf(pos) === -1) throw new Error("EmptySortedList");
    return this.items.indexOf(pos);
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, val) => acc + val);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return (this.items.reduce((acc, val) => acc + val))/this.length;
  }
}

module.exports = SortedList;
