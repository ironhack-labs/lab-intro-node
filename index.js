class SortedList {
  constructor() {
    this.items = []; 
    this.length = this.items.length;
  }
  
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((item1,item2) => item1-item2);
  }

  get(pos) {
    if (pos < 0 || pos > this.items.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]}
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length-1];
    }
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, item) => acc + item, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
      } else {
        return this.sum()/this.items.length
      }
  }
}

module.exports = SortedList;

