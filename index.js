class SortedList {
  constructor(items = [], length =items.length) {

 this.items = items; 
 this.length = length; 


  }

  add(item) {

    let i = 0;
    while (i < this.items.length && this.items[i] < item) {
      i++;
    }
    this.items.splice(i, 0, item); 
    this.length = this.items.length;

  }

  get(pos) {

    if (!this.items.includes(pos)) {
      throw new Error ("OutOfBounds");
    }
    else {
      return this.items.indexOf(pos); 
    }
  }

  max() {

if (this.length === 0) {

  throw new Error ("EmptySortedList")
}

else {

  let maxNum =Math.max(...this.items); 
  return maxNum; 
}

  }

  min() {

    if (this.length === 0) {

      throw new Error ("EmptySortedList")
    }
    
    else {
    
      let minNum =Math.min(...this.items); 
      return minNum; 
    }
  }

  sum() {

    if (this.length === 0) {
      return 0; 
    }

    else {
      
      return this.items.reduce ((accumulator, currentValue) => accumulator + currentValue , 0); 
 
    }

  }

  avg() {

    if (this.length === 0) {

      throw new Error  ("EmptySortedList"); 
    }

    else {
    let theSum = this.sum(); 
    let theAvg = theSum / this.items.length; 
    return theAvg; } 
  }
}

module.exports = SortedList;
