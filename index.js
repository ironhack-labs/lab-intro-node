class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a , b) =>a - b );
  }

  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return  Math.max(... this.items);
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(... this.items);
  }

  sum() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return let total = this.items.reduce((total, currentElement) => total + currentElement);
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.items.length;
  } 
}

module.exports = SortedList;
