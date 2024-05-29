class SortedList {
  constructor() {
    this.items = [];  // Initialize items as an empty array
    this.length = 0;  // Initialize length as 0
  }

  add(item) {
    // Find the correct position to insert the item to maintain ascending order
    let index = this.items.findIndex(currentItem => currentItem > item);
    if (index === -1) {
      // If no such position is found, push the item to the end of the array
      this.items.push(item);
    } else {
      // Otherwise, insert the item at the found index
      this.items.splice(index, 0, item);
    }
    // Update the length property to reflect the new number of items
    this.length = this.items.length;
  }

  get(pos) {
    // If the position is out of bounds, throw an "OutOfBounds" error
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    // Return the item at the specified position
    return this.items[pos];
  }

  max() {
    // If the list is empty, throw an "EmptySortedList" error
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    // Return the last item in the sorted array, which is the maximum
    return this.items[this.length - 1];
  }

  min() {
    // If the list is empty, throw an "EmptySortedList" error
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    // Return the first item in the sorted array, which is the minimum
    return this.items[0];
  }

  sum() {
    // Return the sum of all items in the array
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    // If the list is empty, throw an "EmptySortedList" error
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    // Return the average of all items in the array
    return this.sum() / this.length;
  }
}

// Export the SortedList class to be used in other modules
module.exports = SortedList;
