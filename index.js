class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
    
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b) => a-b);
  }

  get(pos) {
    if(this.items.indexOf(pos) > 0) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
}
     return this.items[this.length - 1]
  }

  min() {
    if(this.items.length === 0) {
      throw new Error(`EmptySortedList`);
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((total,acc) => total+acc,0);
  }

  avg() {
    return (this.items.reduce((total,acc) => total + acc)) / this.length;
  }
}

module.exports = SortedList;
