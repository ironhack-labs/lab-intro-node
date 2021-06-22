class SortedList {
  constructor() {
    
    this.items = [];
    this.length = this.items.length
  }
  
  add(item) {  // 1) should add a single value to SortedList
              ///We can push three items, and complete all the tests. 
              //But a single added item doesn't work and we don't know why.
              
    this.items.push(item);
     if (this.items.length >0) {
     this.items.sort((a,b) => {
      if (a<b) {
        return -1;
      }
      if (a>b) {
        return 1;
      }
    }
    )
  }
  }
  
  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
    //DONE
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }
  
  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }
  
  sum() {

    return this.items.reduce((acc, elem) => acc + elem, 0)
   
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
    return this.items.reduce((acc, elem) => acc + elem, 0)/ this.items.length
    }
  }
}

module.exports = SortedList;
