class SortedList {
  constructor() {
    
      this.items = [];
      this.length = 0

    
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }


  get(pos) {

    if (pos < 0 || pos >= this.items.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }


  // return the highest value of the array
  max() {
    if (this.items.length === 0){
      throw new Error ("EmptySortedList");
    }
    return Math.max(...this.items);
    
// or return this.items[this.items.length-1];

  }

  min() {
    if (this.items.length === 0){
      throw new Error ("Empty SortedList");

    }
    return this.items[0];
  }

  sum() {

    return this.items.reduce((sum, next) => 
     sum + next, 0);
  }

  avg() {
    if (this.items-this.length === 0){
      throw new Error("EmptySortedList");
    }
    
     return this.items.reduce((sum, next) => 
     sum + next, 0)/this.items.length;
  }
}

module.exports = SortedList;
