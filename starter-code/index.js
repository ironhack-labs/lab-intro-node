class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(item) {
    this.items.push(item);
    this.length +=1;
    this.items.sort((a,b) => a-b);
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
    return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
    return Math.min(...this.items);
    }
  }

  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((total, amount)=> total + amount)/this.length;
    }
  }

  sum() {
    if (this.length === 0){
      return 0
    } else {
    return this.items.reduce((total, amount)=> total + amount)
    }
  }
};

module.exports = SortedList;
