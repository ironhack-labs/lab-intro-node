class SortedList {
  constructor() {
    this.items = [1];//array
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);//includes in the array
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] === undefined){
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  
  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, cur) => acc + cur, 0);
  }

  avg() {
    let sum = this.sum();
    if(this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
