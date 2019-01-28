class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length += 1;
  }

  get(pos) {
    return this.items[pos-1];
  }

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList")
    } else {
      let highValue = Math.max(...this.items);
      return highValue;
    }
  }

  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList")
    } else {
      let minValue = Math.min(...this.items);
      return minValue;
    }
  }

  average() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((accu, current) => accu + current)/this.length;
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    } else {
     return this.items.reduce((accu, current) => accu + current);
    }
  }
};

module.exports = SortedList;
