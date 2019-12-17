class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add = (item) => {
    this.items.push(item);
    this.length = [this.items.sort((a, b) => a - b)].length;
  }

  get = (pos) => {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max = () => {
    //* comofas ternário com throw??? (this.items.length === 0) ? throw new Error("EmptySortedList") : this.items[this.items.length - 1]}
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } return this.items[this.items.length - 1];
  }

  min = () => {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } return this.items[0];
  }
  
  sum = () => {
    let sumResult = 0;
    this.items.map(e => sumResult += e);
    return sumResult;
  }

  avg = () => {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } return (this.sum() / this.items.length);
  }
}

module.exports = SortedList;