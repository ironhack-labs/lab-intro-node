class SortedList {
  constructor() {
    this.items = []; // Initialize items as an empty array
    this.length = 0; // Set initial length to 0
  }

  add(item) {
    this.items.push(item); // Add the item to the array
    this.items.sort((a, b) => a - b); // Sort items in ascending order
    this.length = this.items.length; // Update the length property
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos]; // Return the item at the specified position
    } else {
      throw new Error("OutOfBounds"); // Throw error if pos is out of bounds
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList"); // Throw error if the list is empty
    }
    return this.items[this.length - 1]; // Return the last item, which is the max in sorted order
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList"); // Throw error if the list is empty
    }
    return this.items[0]; // Return the first item, which is the min in sorted order
  }

  sum() {
    return this.items.reduce((acc, item) => acc + item, 0); // Sum all elements in items, returning 0 if empty
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList"); // Throw error if the list is empty
    }
    return this.sum() / this.length; // Return the average by dividing sum by length
  }
}

module.exports = SortedList;
