class SortedList {
  constructor() {
    this.items= [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > 0 && pos < this.length){
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items.pop();
    }
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0;
    } else {
      return this.items.reduce((previousValue, currentValue) => previousValue + currentValue);      
    }
  }

  avg() {
    if(this.items.length !== 0){
      return (this.items.reduce((previousValue, currentValue) => previousValue + currentValue))/this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
