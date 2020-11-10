class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length++
  }

  get(pos) {
    if (pos > this.length ){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b) => Math.max(a,b))
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b) => Math.min(a,b))
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
        let sum = 0; 
        for (let i=0; i<this.length; i++ ){
          sum += this.items[i];
          
        }
        return sum
      }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
        return this.sum()/this.length
      }

  }
}

module.exports = SortedList;
