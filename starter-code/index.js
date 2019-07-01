class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort();
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
      if (this.items.length < 1) {
        throw  new Error('EmptySortedList');
      } else {
        return this.items[this.length-1];
     }
  }
  min() {
    if (this.items.length < 1) {
      throw  new Error('EmptySortedList');
    } else {
      return this.items[0];
   }
  }
  average() {
    if (this.items.length < 1) {
      throw  new Error('EmptySortedList');
    } else {
      return this.sum()/ this.length;
   }

  }
  sum() {
    if (this.length === 0) {
      return 0;
    
    } else {
      return this.items.reduce((acc, ele) => acc + ele);
      
   }
  }
};

module.exports = SortedList;
