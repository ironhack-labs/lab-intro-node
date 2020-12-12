class SortedList {


  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    for (let i = 0; i < this.items.length; i++){
      this.pos = this.items[i];
    }

    if (this.pos > this.items.length) {
      throw new Error('OutOfBounds');
    }

    return this.pos;
  }

  max() {
    if(this.items.lenght === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...items);
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
