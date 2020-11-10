class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    
    this.items.sort( (a, b) => a-b );

    this.length = this.items.length

  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }

  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else { 
      return this.items.reduce( (a, b) => {
        return Math.max(a, b)
      }) 
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else { 
      return this.items.reduce( (a, b) => {
        return Math.min(a, b)
      }) 
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce ( (acc, val) => {
        return acc + val
      })
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
