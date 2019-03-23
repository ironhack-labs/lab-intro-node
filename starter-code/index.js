class SortedList {
  constructor() {
    this.items = [];
    // this.items = this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
  }
  add(item) {
   if (this.length == 0) {
    this.items.unshift(item);
    this.length = this.items.length;

   } else if (this.length >= 1){
    this.items.unshift(item);
    this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
   }
  }

  get(pos) {
     if (this.length === 0) {
      throw new Error('OutOfBounds')
    } else if (this.length === 1) { 
      return this.items[0];
    } else {
      return this.items[pos - 1];
    }
    // if (this.items.length > 0) {
    //   return this.items[pos - 1];
    // } else if (this.items.length == 0) {
    //   throw new Error('OutOfBounds');
    // }    
  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }else {
      return Math.max.apply(null, this.items);
    }
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }else {
      return Math.min.apply(null, this.items);
    }  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }else {
      let sum = this.items.reduce(function(a,b) {return a + b;}); 
      let average = sum/this.items.length;
      return average;
    }
  }
  sum() {
    if (this.length == 0) {
      return 0;
    }else {
      return this.items.reduce(function(a,b) {return a + b;}); 
    }
  }
  // reorder () {
  //   add() 
  //   get() 
  // }
};

//let newList = new SortedList ();

module.exports = SortedList;
