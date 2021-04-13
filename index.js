class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('out of bounds');
    }
    return this.items[pos];;
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if(this.items.length === 0){return 0;}
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = this.items.reduce(reducer);
    return sum; 
  }

  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    let sum = this.sum();
    return sum/this.length; 
  }
}

module.exports = SortedList;