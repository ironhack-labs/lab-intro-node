class SortedList {
  constructor() {
    this.items = [];  // Initialize an empty array for storing the items
    this.length = 0;  // Initialize the length to 0 since the list is empty
  }

  add(item) {
    let inserted = false;
    // Loop through the array and find the correct position to insert the item
    for (let i = 0; i < this.items.length; i++) {
      if (item < this.items[i]) {
        this.items.splice(i, 0, item); // Insert the item at the found position
        inserted = true;
        break;
      }
    }

    // If the item is larger than all items, append it to the end
    if (!inserted) {
      this.items.push(item);
    }

    this.length = this.items.length; // Update the length of the array
  }

  get(pos) {
    // Check if the position is out of bounds (either negative or beyond the array length)
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds"); // Throw error if out of bounds
    }
    return this.items[pos]; // Return the item at the given position
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList'); // Throw error if the list is empty
    }
    return Math.max(...this.items); // Return the maximum value in the list
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList'); // Throw error if the list is empty
    }
    return Math.min(...this.items); // Return the minimum value in the list
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0); // Calculate and return the sum of the array
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length; // Calculate and return the average
  }
}

module.exports = SortedList;
