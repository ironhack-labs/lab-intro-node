class SortedList {
  constructor() {
    this.items =[]
    this.length = this.items.length;
  }

  

  add(item) {
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
   
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("outOfBounds");
    }
    return this.items[pos];
  }

  max() {}

  //throw new Error('EmptySortedList');


  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
