class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a, b) => a - b);

  }
  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.sort((a, b) => a - b)[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.sort((a, b) => a - b)[0];
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((ac, cu)=> {return ac + cu},0)/this.items.length;
  }
}

  sum() {
    if (this.length === 0){
      return 0;
    }else{
    return this.items.reduce((ac, cu)=> {return ac + cu},0);
  }
  }
};

module.exports = SortedList;