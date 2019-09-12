class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.length++;
    if (this.items.length < 1) {
      this.items.push(item);

      return;
    }
    if (this.items.length < 2) {
      if (this.items[0] < item) {
        console.log;
        this.items.push(item);

        return;
      }
    }
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      if (element >= item) {
        let right_side = this.items.splice(i, this.items.length);
        this.items.push(item);
        this.items = this.items.concat(right_side);

        return;
      }
    }
    this.items.push(item);
  }
  get(pos) {
    if (pos > this.length - 1 || pos < 0) throw new Error("OutOfBounds");
    let res = this.items[pos];
    return res;
  }
  max() {
    if (this.length > 0) return this.items.pop();
    throw new Error("EmptySortedList");
  }
  min() {
    if (this.length > 0) return this.items.shift();
    throw new Error("EmptySortedList");
  }
  average() {
    if (this.length > 0) return this.sum() / this.length;
    throw new Error("EmptySortedList");
  }
  sum() {
    if (this.items.length > 0) return this.items.reduce((acc, cv) => acc + cv);
    return 0;
  }
}

module.exports = SortedList;
