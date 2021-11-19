class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[this.items.length - 1]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
     return this.items[0]
    }
  }

  sum() {
    if (this.items.length === 0) return 0;
    return this.items.reduce((a, c) => a + c, 0);
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    let avg = (this.sum() / this.length);
    return avg
  }
}

module.exports = SortedList;
