class SortedList {
  constructor(items, lenght) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    //should add a value while keeping the list sorted - ascending
    this.items.sort((a,b) => a - b);
    //should add a single value to SortedList
    this.length = this.items.length;
  }

  get(pos) {
    //should return an OutOfBounds exception if there is no element in that position
    // option 2
    if (pos >= this.items.length) throw new Error('OutofBounds');
    //should return the element in that position
    return this.items[pos];
  }

  max() {
    //should return an EmptySortedList exception if there are no elements in the list
    // option 1 
    if(!this.items.length) throw new Error('EmptySortedList');
    // option 2
    //if(this.items.length === 0) throw new Error('EmptySortedList');

    //should return the max (highest) value in the list
    // option 1 
    //return Math.max(...this.items);
    // option 2 - reduce
    return this.items.reduce((acc, curr) => acc > curr ? acc : curr);
  }

  min() {
    //should return an EmptySortedList exception if there are no elements in the list
    if(!this.items.length) throw new Error('EmptySortedList');
    // should return the min (lowest) value in the list
    return this.items.reduce((acc, curr) => acc < curr ? acc : curr);
  }

  sum() {
    // should return 0 for an empty sorted list
    if(!this.items.length) return 0;
    // should return the sum of all elements in the list
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    //should return an EmptySortedList exception if there are no elements
    if(!this.items.length) throw new Error ('EmptySortedList');
    //should return the average of elements in the list
    return this.items.reduce((acc, curr) => acc + curr, 0)/ this.items.length;
  }
}

module.exports = SortedList;
