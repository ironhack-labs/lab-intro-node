class SortedList {

  constructor() {
    this.items = [];
    this.length = 0;
  }


  add(x) {
    this.items.push(x);
    this.items.sort((a,b) => a -b);
    this.length++;

  }
  get(pos) {
    if((pos - 1) < (this.length)) {
      return this.items[pos - 1];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.length === 0) {
        throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }


  }
  min() {
      if(this.length === 0) {
          throw new Error('EmptySortedList');
      } else {
          return Math.min(...this.items);
      }


  }
  average() {
      if(this.length === 0) {
          throw new Error('EmptySortedList');
      } else {
          return this.sum() / this.length;
      }


  }
  sum() {
    if(this.items.length === 0) return 0;

    return this.items.reduce((sum,el) => sum+=el, 0);
  }
};

module.exports = SortedList;
