

class SortedList {

  constructor() {
    this.items = [];
    this.length = this.items.length;
   }

  add(item) {
    this.items.push(item);
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    return this.items.sort;
    }
  }

  get(pos) {
    
    if (this.items.indexOf(pos) === -1){
      throw new Error('OutOfBounds')
    }
    return this.items.indexOf(pos);

  }

  max() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    return Math.min(...this.items);
    }
  }

  sum() {
    if (!this.items.length){
      return 0;
    } else {
    this.items.reduce(function (a, b)  { return a + b; });
    }
   }

  avg() {}
}

module.exports = SortedList;
