class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length=this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if(pos > this.length-1){
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length===0){
      throw new Error("Empty SortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    const totalSum = this.items.reduce( function (accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);
    return totalSum;
  }

  avg() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    } else {
      const averageNumber=this.sum()/this.length;
      return averageNumber;
    }
  }
}

module.exports = SortedList;
