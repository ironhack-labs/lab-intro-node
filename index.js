class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  
  add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b); // Sort the array after adding the item
      this.length = this.items.length;   // Update the length property
    }

  get(pos) {
    if(pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items.at(pos);
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } 
      return this.items[this.length - 1]; // Return the last item in the sorted array
  }

  min() {
    if(this.length === 0) {
      throw new Error("Empty SortedList");
    } 
    return this.items[0]; // Return the first item in the sorted array
  }

  sum() {
    return this.sum = this.items.reduce((acc, currentNumber) => acc + currentNumber, 0)
  }

  avg() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } 
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
