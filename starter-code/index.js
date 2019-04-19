class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    // return  this.items;
  }
  add(x) {
    this.items.unshift(x);
    //I think it also could be done with push, unshift, slice. What I saw was that the test was always sl = 0, but SL was the new object, so, not an array. only if sl.items (which is the array we are changing) would the test be OK. Not sure how to solve it.
    return this.items
  }
  get(pos) {
    if (pos > this.items.length-1){
      throw new Error('OutOfBounds'); 
    }
    else {
    return this.items[pos]}
  }
  max() {
    //using if statement
    if(this.items === [] || 0){
      throw new Error("EmptySortedList"); 
    } else {
      return Math.max(...this.items)
    }



  }
  min() {
    if(this.items === [] || 0){
      throw new Error("EmptySortedList"); 
    } else {
      return Math.min(...this.items)
    }
  }
  average() {
    if(this.items === [] || 0){
      throw new Error("EmptySortedList"); 
    } else {
      let acc = 0;
      let sumVal = this.items.reduce((acc,currValue =>{
       return acc + currValue } ,0));

       return sumVal/this.items.length
    }

  }
  sum() {
    if(this.items === [] || 0){
      throw new Error("EmptySortedList"); 
    } else {
      let acc = 0;
      let sumVal = this.items.reduce((acc,currValue =>{
       return acc + currValue } ,0));

       return sumVal
    }
  }
};

// new SortedList([0])

module.exports = SortedList;
