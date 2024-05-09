class SortedList {
  constructor() { 
  this.items = []
  this.length = 0
}
  add(item) {
     // Find the index where the new item should be inserted to maintain sorted order
     let index = 0;
     while (index < this.length && this.items[index] < item) {
       index++;
     }
 
     // Insert the item at the correct index
     this.items.splice(index, 0, item);
 
     // Update the length property
     this.length++;
   }
  

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
