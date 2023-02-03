class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
    
  add(item) {
    this.items.push(item);
    this.items.sort(function( a , b){
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
      });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]){
    return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
