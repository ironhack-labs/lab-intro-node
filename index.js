class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => a-b);
    //console.log(items);
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    let sum = 0;
    for (this.num of this.items){
      sum += this.num;
    }
    return sum
  }

  avg() {
    let sum = 0;
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    for (this.num of this.items){
      sum += this.num;
    }
    return sum/this.length;
  }
}

//const sortedList = new SortedList();
module.exports = SortedList;
