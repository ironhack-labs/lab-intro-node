class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if( pos > this.length || pos < 0 ) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if(this.length == 0) throw new Error('EmptyStoredList');
    return this.items[this.length-1]
  }

  min() {
    if(this.length == 0 ) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    return this.items.reduce((n,a) => n+a, 0);
  }

  avg() {
    if(this.length == 0 ) throw new Error('EmptySortedList');
    return (this.sum()/this.length);
  }
}

module.exports = SortedList;
