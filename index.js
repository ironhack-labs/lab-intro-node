class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length ++;
    
  }

  get(pos) {
    if (typeof this.items[pos] !== 'number'){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.length === 0){
      return 0;
    } else {
      let sum = this.items.reduce((a, b) => {
        return a + b;
      })
      return sum;
    }
  }

  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce((a, b) => {
        return a + b;
      })
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
