class SortedList {
  constructor() {
    this.items  = [];
    this.length = this.items.length;
  }


  add(item) {
   this.items.push(item)
   this.items.sort((a,b)=> a-b)
   this.length = this.items.length;

  }

  get(pos) {

    if (pos > this.items.length ) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos]
   
  }

  max() {

    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items)
  }

  sum() {
  
    
    if (this.length === 0) {
      return 0;
    } 

    let sum = this.items.reduce((acc, currentv) => acc + currentv)
    return sum

    

  }

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    let average = this.items.reduce((acc, currentv) => acc + currentv)/this.length;
    return average
  }
}

module.exports = SortedList;

