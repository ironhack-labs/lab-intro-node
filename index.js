let sum = 0;

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) throw new Error ('EmptySortedList')
    else return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) return 0;
    else {
      sum = this.items.reduce((a, b) => a + b, 0);
      return sum;
    }  
  }

  avg(){
    if (this.length === 0) throw new Error ('EmptySortedList')
    else return sum / this.length
  }
}

export default SortedList;

