class SortedList {
  constructor() {
    this.items = [];
  this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
      if(pos > this.length) {
        throw new Error('OutOfBounds');
      }
  
      return this.items.indexOf(pos)
    }


  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(null, this.items)
  }

  min() {
      if (this.length === 0) {
        throw new Error('EmptySortedList');
      }
      return Math.min.apply(null, this.items) 
    
  }

  sum() {
      if (!this.length) {
        return 0;
      }
      return this.items.reduce((sum, a) => sum + a)
    
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.reduce((a, b) => a + b) / this.length;
  }
}

module.exports = SortedList;
