class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    }

  get(pos) {
    if (pos >= this.items.length ) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
  }
  }
  max() {
    if (!this.items.length) {
    throw new Error("EmptySortedList");
    } else {
      return Math.max(SortedList(this.items));
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
    return Math.min(SortedList(this.items));
    }
  }
  
  sum() {
    return this.items.reduce(function(acc, act) {
       return acc + act; 
      }, 0)
  }

  avg() {
    if ( this.items.length === 0){
      throw new Error ('EmptySortedList')
    }
    return (this.sum()/this.items.length)
  }
}

module.exports = SortedList;
