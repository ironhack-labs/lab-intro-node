class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.splice(this.items.findIndex(x => x > item), 0, item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) throw new Error("OutOfBounds"); 
    return this.items[pos] 
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((acumulador, item) => acumulador + item, 0);
  }
+
  avg() {
    return sum(this.items)/this.items.length
  }
}

module.exports = SortedList;
