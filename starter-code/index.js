class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.update();
    this.sort();
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    return Math.max.apply(null, this.items);
  }
  min() {
    return Math.min.apply(null, this.items);
  }
  average() {
    return this.sum()/this.items.length;
  }
  sum() {
    return this.items.reduce((acc, e) => acc += e, 0);
  }
  update() {
    this.length = this.items.length;
  }
  sort() {
    this.items.sort((a,b)=>a-b)
  }
}
module.exports = SortedList;
