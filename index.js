class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
      return this.items.sort(function(a, b){return a-b})[this.items.length - 1];
  }
  

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
      return this.items.sort(function(a, b){return a-b})[0];
  }
 

  sum() {
    let  sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    if (this.length === 0) {
      sum = 0;
    } 
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/this.items.length;
      }
    } 
  };





module.exports = SortedList;
