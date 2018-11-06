class SortedList {

  constructor(items, length) {
    // should create an empty SortedList
    this.items = [];
    this.length = this.items.length;
  };

  add(item) {
    // should add a single value to SortedList
    this.items.push(item);
    // should add a second value to SortedList, sorted
    this.items.sort((a, b) => a - b);
    // should add a third value to SortedList
    this.items.push(a,b,c);
    // should add a third value to SortedList, sorted
    this.items.sort((a, b, c) => a - b && a - c && b - c); //??
    this.length = this.items.length;
  };

  get(pos) {
    // should return an OutOfBounds exception if there is no element in that position
    if (SortedList.items[2] === void 0) { throw new Error ('OutOfBounds') }
    // should return the element in that position
    return SortedList.items[2];
    };
  
  max() {
    if (this.items.length === 0) { 
      // should return an EmptyList exception if there is no element in the list
      throw new Error ("EmptyList");  
    }
    // should return the max element in the list
    return Math.max(this.items);
  };

  min() {
    if (this.items.length === 0) { 
      // should return an EmptyList exception if there is no element in the list
      throw new Error ("EmptyList");  
    }
    // should return the min element in the list
    return Math.min(this.items);
  };

  sum() {
    if (this.items.length === 0) { 
      // should return 0 for an empty sorted list
      return 0;
  }
  // should add(sum) all elements of the array if there are elements in the list
  return this.items.reduce(( acc, cvalue) => acc + cvalue);
};

  average() {
    if (this.items.length === 0) { 
      // should return an EmptyList exception if there is no element in the list
      throw new Error ("EmptyList");  
    }
    // should return the average of elements in the array
      return (this.items.reduce(( acc, cvalue) => acc + cvalue)) / this.items.length
  }
 
};

module.exports = SortedList;


