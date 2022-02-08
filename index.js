class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = this.items.length

  }

  add(item) {

  this.items.push(item);

  this.length = this.items.length;

  return this.items.sort((a,b) => a-b);
  
  }

  get(pos) {

    if (this.items.indexOf(pos) === -1) {
      throw new error('OutOfBounds'); 
    } else if (this.items.indexOf(pos)) {
      return this.items[pos]

  }}

  max() {

    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length-1];
    }

  }

  min() {

    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }

  }

  sum() {

    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a,b)=> a+b)

  }}

  avg() {

    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b)=> a+b) / this.length;
    }

  }
}

module.exports = SortedList;
