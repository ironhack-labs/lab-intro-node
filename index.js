class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
      this.items.push(item);
      this.length++;
      return this.items.sort((a, b) => a - b); // ascending order using sort
  }

  get(pos) {
    if(pos >= this.items.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];   // to get the position of this item
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } 
    return Math.max(...this.items);
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } 
    return Math.min(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
