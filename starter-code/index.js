class SortedList {
  constructor() {
    this.items = [];
    this._update();
  }
  _update(){
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a-b);
    this._update();
  }
  get(pos) {
    if(typeof this.items[pos-1] === 'undefined') throw new Error('OutOfBounds');
    return this.items[pos-1];
  }
  max() {
    if(this.length === 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }
  min() {
    if(this.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }
  average() {
    if(this.length === 0) throw new Error("EmptySortedList");
    return this.items.reduce((a, b) => a+b, 0) / this.length;
  }
  sum() {
    return this.items.reduce((a, b)=> a+b, 0);
  }
}

module.exports = SortedList;
