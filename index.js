class SortedList {
  constructor() {
    this.items = []; //empty array to store items in
    this.length = 0; // length starts at zero as there are no items
  }

  add(item) {
    this.items.push(item); // add new item to array
    this.items.sort((a, b) => a - b); // sort array
    this.length = this.items.length; // update length to number of items in the list
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }
  
  max() {
    if (this.items.length === 0) { // check if array is empty
      throw new Error("EmptySortedList"); // if so throw error
    }
    return Math.max(...this.items); //return highest number and use spread operator to change array into loose arguments
  }
 
  min() {
    if (this.items.length === 0) { // check if array is empty
      throw new Error("Empty SortedList");
    }
    return Math.min(...this.items); // return lowest number and use spread operator to change array into loos arguments
  }

  sum() {

    return this.items.reduce((acc, item) => acc + item, 0); // iterate through each item, the acc is zero and counts each item
  }

  avg() {
      const sum = this.items.reduce((acc, item) => acc + item, 0); // iterate through each item, the acc is zero and counts each item
      return sum / this.items.length; // divide sum through total number of items in array
      }
  }


module.exports = SortedList;
