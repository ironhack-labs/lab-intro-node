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
    if(this.items[pos] === undefined) throw new Error('OutOfBounds');
    return this.items[pos];
  }
  max() {
    if(this.length === 0) throw new Error("EmptySortedList");

  }
  min() {
    if(this.length === 0) throw new Error("EmptySortedList");
  }
  average() {
    if(this.length === 0) throw new Error("EmptySortedList");
  }
  sum() {
  
  }
}

module.exports = SortedList;
