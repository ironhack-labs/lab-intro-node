class SortedList {
  constructor() {
    this.items = [];
    this.length =0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.lenght =this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");  // If position is out of bounds, throw an error
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");  // If the list is empty, throw an error
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");  // If the list is empty, throw an error
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");  // Throw error if list is empty
    }
    return this.sum() / this.length;  // Return the average (sum / length)
  }
}

module.exports = SortedList;

const list = new SortedList();
console.log(list.items);  // Should be an empty array initially
list.add(5);
console.log(list.items);  // Should be [5] after adding 5
list.add(1);
console.log(list.items);  // Should be [1, 5] after adding 1
list.add(3);
console.log(list.items);  // Should be [1, 3, 5] after adding 3

