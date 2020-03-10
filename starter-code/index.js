class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.length + 1;
    this.items.sort((a,b) => a-b);
    console.log(this.items);
  }

  get(pos) {
    if(this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.items[this.length-1]){
      return this.items[this.length-1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if(this.items[0]){
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    } else {
      return this.items.reduce((a,b) => (a+b));
    }
  }

  avg() {
      return this.items.reduce((a,b) => (a+b)) / this.items.length;
    }

  }

module.exports = SortedList;
