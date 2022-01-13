class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort(function(a, b){return a - b});
    this.length = this.items.length;
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(!this.items.length){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if(!this.items.length){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a,b) =>  a+b,0);
  }

  avg() {
    return this.items.reduce((a,b) =>  a+b)/this.length;
  }
}

module.exports = SortedList;
