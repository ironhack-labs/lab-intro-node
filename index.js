class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {

    this.items.push(item);
    this.items.sort((a,b) => {
      return a - b
    });
    this.length = this.items.length;

  }

  get(pos) {
  if (pos > this.length) {
    throw new Error('OutOfBounds');
  };
  return this.items[pos];
  }

  max() {
  if (this.length === 0) {
    throw new Error('EmptySortedList');
  }
  return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
    }
  

  sum() {
    // if (this.length === 0) {
    //   return 0
    // }
    let res = 0
    for (let i=0; i< this.length; i++) {
      res += this.items[i]
    }
    return res;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
