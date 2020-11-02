class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b)=>a-b);

  }

  get(pos) {
    if (pos >length) {
      throw new Error('OutOfBounds');
    }
    // don´t get it.
    return this.items[pos - 1];

  }

  max() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    // return this.items.sort((a,b)=>a,b)[this.length -1];
    return Math.max(...this.items)
  }

  min() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    // return this.items.sort((a,b)=>a,b) [0];
    return Math.min(...this.items)
  }

  sum() {
    if (!this.length) {
      return 0;
    }
    return this.items.reduce((a,sum)=>a+sum);
  }

  avg() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    return this.sum() /this.length;
  }
}

module.exports = SortedList;
