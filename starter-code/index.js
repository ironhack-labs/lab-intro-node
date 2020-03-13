class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => { return a-b });
  }

  get(pos) {
    if(!this.items[pos]) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length > 0){
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if(this.length > 0){
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if(this.length > 0){
      return this.items.reduce((a,b) => a+b, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if(this.length > 0){
      return (this.sum())/this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
