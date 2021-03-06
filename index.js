class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.sortItems();
    this.currencyLength();
  }

  sortItems() {
    this.items.sort((a,b)=>a - b);
  }

  currencyLength() {
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos]) {
      return pos;
    }
    throw new Error('OutOfBounds');
  }

  zeroError() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  max() {
    this.zeroError();
    return this.items[this.length - 1];
  }

  min() {
    this.zeroError();
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, number)=>{
      return acc + number;
    }, 0)
  }

  avg() {
    this.zeroError();

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
