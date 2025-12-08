class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }

  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a,b) => a - b);
  }

  get(pos) {
    if(pos < 0 || pos >= this.length ){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if( this.items >= 0 ){
      throw new Error("EmptySortedList");
    }
    return this.items [this.length - 1];
  }

  min() {
    if( this.items >= 0 ){
      return new Exception("EmptySortedList");
    }
    return this.items [0];
  }

  sum() {
    if (this.length === 0) {
    return 0;
  }

    let total = 0;
    for (let i = 0; i < this.length; i++) {
    total += this.items[i];
  }

    return total;
  }

  avg() {}
}

module.exports = SortedList;
