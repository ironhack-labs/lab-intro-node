class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    // finding position where to insert
    let i = 0;
    for(i = 0; i <= this.items.length - 1; i++){
      if(this.items[i] > item) {
        break;
      }
    }
    // insert in right position
    this.items.splice(i, 0, item);
    this.length = this.length + 1;
  }

  get(pos) {
    if (this.items[pos] == undefined) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
    
  }

  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length - 1]
  }

  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
