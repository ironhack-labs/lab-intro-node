
class SortedList {
  
  constructor() {
    this.items = [];
    this.length = 0;

  }

  add(item) {
    this.items.push(item);
  this.items.sort((a, b) => a -b);
  this.length = this.items.length;
  }

  get(pos) {
    if(pos< 1 || pos > this.length){
      throw new Error("OutOfBounds");
    }
    return this.items[this.length -1];
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");    
    }
    return this.items[this.length -1]
  }

  min() {
if (this.length === 0) {
  throw new Error("EmptySortedList");  
}
return this.items[0];
}
  sum() {
    return this.items.reduce((a, b) => a+b, 0);
  }

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList");  
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;

//The task here is to create a class -
//that maintains a sorted list of numbers in ascending order.