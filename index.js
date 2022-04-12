class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);

    // function compare(a, b) { .
    //   if (a < b) {
    //     return -1;
    //   }
    //   if (a > b) {
    //     return 1;
    //   }
    //   return 0;
    // }

    this.items.sort((a,b) => a - b);
    this.length ++;
  }

  get(pos) {
    if(pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    
    let highestValue = 0;
    return highestValue = Math.max(...this.items);
  }
  
  min() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    
    let lowestValue = 0;
    return lowestValue = Math.min(...this.items);
  } 
  

  sum() {
    if(this.items.length === 0) return 0;
    
    return this.items.reduce((a,b) => a + b);
  }
  
  avg() {
    // let average = this.items.reduce((a,b) => a + b) / this.items.length;
    // return average;
    // made new iterations.. 
    
    if(this.items.length === 0) throw new Error('EmptySortedList');
    
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
