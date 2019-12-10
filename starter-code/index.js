class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort( (a,b) => { return a-b; } );
    this.length++;
  }

  get(pos) {
    if( pos >= this.length ) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if( this.length === 0 ) throw new Error("EmptySortedList");
    return this.items[this.length-1];
  }

  min() {
    if( this.length === 0 ) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    return this.items.reduce( (t,v) => { return t + v; }, 0);
  }

  avg() {
    if( this.length === 0 ) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
