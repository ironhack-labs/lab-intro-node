class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item); // push item into the items array
    this.items.sort((a,b) => a-b); // sort items in ascending order
    this.length++; // add 1 to the length of items array
  }

  get(pos) {
    if(pos <= this.length) { // if called position is smaller or equal than the lenght of items array
      return this.items[pos]; // return the called item
    } else { // if called position is bigger than the lenght of items array
      throw new Error('OutOfBounds'); // throw error message
    }
  }

  max() {
    if(this.length === 0) { // if array is empty
      throw new Error('EmptySortedList'); // throw error message
    }

    return this.items[this.length - 1]; // array is zero-based so check length of items array minus 1 to call the last item which should be the highest value since the array is already sorted
  }

  min() {
    if(this.length === 0) { // if array is empty
      throw new Error('EmptySortedList'); // throw error message
    }
    return this.items[0]; // array is zero-based so first item has position 0
  }

  sum() {
    if (this.length === 0) { // if array is empty
      return 0; // return 0
    } 

    let sum = this.items.reduce((acc, currVal) => { // create new variable sum and use reduce method to to iterate through the items array
      return acc + currVal; // adding current element value to the sum of the previous element values
    }, 0); // starting value of sum variable is 0

    return sum; // return the sum of the array
  }

  avg() {
    if(this.length === 0) { // if array is empty
      throw new Error('EmptySortedList'); // throw error message
    }

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
