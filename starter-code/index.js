class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(elem) {
    this.items.push(elem);
    this.length +=1;
    this.items.sort((a,b) => a-b);
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
    return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
    return Math.min(...this.items);
    }
  }
  sum() {
    if (this.length === 0){
      return 0;
    } else {
      return this.items.reduce((total, acum) => total + acum)
    }
  }
  average() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((total, acum) => total + acum) / this.length;
    }
  }
};

module.exports = SortedList;

