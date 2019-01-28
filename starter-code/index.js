class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a, b) => a - b);
    this.length++;
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    let max = 0
   try{
      max = this.get(this.length);
    }catch(e){
      throw new EmptySortedList("OutOfBounds", e);
    }
    return max;
   
  }
  min() {
    let min = 0
   try{
      min = this.get(1);
    }catch(e){
      throw new EmptySortedList("OutOfBounds", e);
    }
    return min;
  }
  average() {
    try{
      return this.sum()/this.length
    }catch(e){
      throw new EmptySortedList("OutOfBounds", e);
    }
  }
  sum() {
    if(this.length){
      return this.items.reduce((a, b) => {return a+b})
    }else{
      return 0
    }
   
  }
};

module.exports = SortedList;

// Max
// The max() method should return the highest value of the array.

// In the case you have an empty SortedList, you must throw an error with the message "EmptySortedList". For this, you can use:

// throw new Error("EmptySortedList")
// If you want more information about try...catch, you can go on the Mozilla documentation.

// Min
// The min() method should return the lowest value of the array.

// In the case you have an empty SortedList, you must throw an error with the message "EmptySortedList".

// Sum
// The sum() method should return the sum value of the array.

// Average
// The average() method should return the average value of the array.

// In the case you have an empty SortedList, you must throw an error with the message "EmptySortedList".
