class SortedList {
  constructor(itemArray = []) {
    // Sort the array and assign it to 'items'
    this.items = itemArray.sort((a, b) => a - b); // Sorting the array
    this.length = this.items.length; // Assign length after sorting
  }

  // Method to display the items and their length
  displayItems() {
    console.log("Items:", this.items);
    console.log("Length:", this.length);
  }

  // Method to add a new item to the list
  add(item) {
    this.items.push(item); // Add the item to the array
    this.items.sort((a, b) => a - b); // Sort the array after adding the item
    this.length = this.items.length; // Update the length
  }

  // Method to get the item at a specific position
  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("Out of bounds"); // Error if the position is out of range
    }
    return this.items[pos]; // Return the item at the given position
  }

  // Method to get the maximum value
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList"); // Error if the list is empty
    }
    return this.items[this.length - 1]; // Return the last item (max value)
  }

  // Method to get the minimum value
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList"); // Error if the list is empty
    }
    return this.items[0]; // Return the first item (min value)
  }

  // Method to get the sum of all the items
  sum() {
    return this.items.reduce((acc, val) => acc + val, 0); // Sum all elements in the array
  }

  // Method to get the average of the items
  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList"); // Error if the list is empty
    }
    return this.sum() / this.length; // Calculate average by dividing sum by length
  }
}

module.exports = SortedList;
