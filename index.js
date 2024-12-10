class SortedList {
  constructor() {
    this.items = []; 
    this.length = 0; 
  }

  //iteration 2
  add(item) {
    this.items.push(item); 
    this.items.sort((a, b) => a - b); // Sort the array in ascending order
    this.length = this.items.length; // Update the length property
  }
  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds"); // Throw error if position is invalid
    }
    return this.items[pos]; // Return the item at the specified index
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
    return this.items.reduce((acc, curr) => acc + curr, 0); // Sum all items
  }



}

module.exports = SortedList;