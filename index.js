class SortedList {
  constructor() {
    this.items = []; 
    this.length = this.items.length;
  }

  add(item) {
    if (this.length >= 0) {
    this.items.push(item); // correct 
    ++this.length
    this.items.sort(function(a,b) {return a-b});
    }
    return this.items;
  }

  get(pos) {
    for(let i=0; i < this.length; i++) {
      if (pos == this.items[i]) {
        return this.items[i]
      } 
      else if (pos > this.length) {
        throw new Error('OutOfBounds');
      }
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else if (this.length >= 0) {
    return Math.max(...this.items)
    } 
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else if (this.length >= 0) {
      return Math.min(...this.items)
      } 
  }

  sum() {}

  avg() {}
}


module.exports = SortedList;


