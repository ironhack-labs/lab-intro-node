class SortedList {
  constructor() {
    this.items = []; 
    this.length = this.items.length; 
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length; 
  }

  get(pos) {
    if ( pos < this.items.length){
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0){
      throw new Error ('EmplySortedList');
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.length === 0){
      throw new Error ('EmplySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    const sum = this.items.reduce((a,b) => a+b, 0)
    return sum; 
  }

  avg() {
    if (this.length === 0){
    throw new Error ('EmplySortedList');
  } else {
    const avg = this.sum() / this.length
    return avg
  }}
}

module.exports = SortedList;
