class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(pos> this.items.length){
      throw new Error('OutOfBounds');
    }else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.items[0];
    }
  }

  sum() {
    if(this.length === 0){
      return 0
    } return this.items.reduce((acc, item) => acc + item);
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
