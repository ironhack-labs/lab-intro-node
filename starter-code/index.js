// new SortedList should create a new object from the SortedList class.

// The object should have two properties: items and length.

// items should be an array,
// length should be the number of elements in the array.

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> {
      return a-b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length){
    return this.items[pos];
    }else{
    throw new Error("OutOfBounds");
  }
}

  max() {
    if (0 < this.length){
      const arrayMax = this.items;
      return Math.max(...arrayMax);
      }else{
        throw new Error("EmptySortedList");
      }
  }

  min() {
    if (0 < this.length){
      const arrayMin = this.items;
      return Math.min(...arrayMin);
      }else{
        throw new Error("EmptySortedList");
      }
  }

  sum() {
    let sum = 0;

    this.items.forEach((item)=>{
      sum += item;
    });

    return sum
  }

  avg() {
    if (this.length>0){
    let sum = 0;

    this.items.forEach((item)=>{
      sum += item;
    });

    return sum/this.length;}
    else {
      throw new Error("EmptySortedList");
    }
  }
}

const newOject = new SortedList();


module.exports = SortedList;
