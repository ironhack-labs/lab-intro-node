class SortedList {
  constructor() {
    this.list = [];
    this.length = 0;
  }
  add(item) {
    this.length++
    this.list.push(item)
    this.list.sort((a, b) => a - b);
  }
  get (pos) {
    return this.list[pos - 1]
  };
  
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.list);
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.list);
    }
   }
  average() {
      if(this.length === 0) {
        throw new Error('EmptySortedList')
      } else {
        return this.sum() / this.length;
      }
   }
  sum() {
    return this.list.reduce((a,b) => a+b, 0)
   }
};

module.exports = SortedList;

