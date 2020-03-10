class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.find(element => element === pos )) {
      return this.items[pos];
      
    } else {
      throw new Error("OutOfBounds");
    }
  }
  
  max() {
    if (this.length !== 0) {
      return this.items[this.length-1];
      
    } else {
      throw new Error("EmptySortedList");
    }
  }
  
  min() {
    if (this.length !== 0) {
      return this.items[0];
      
    } else {
      throw new Error("EmptySortedList");
    } 
  }

  sum() {
    if(this.length === 0){
      return 0;
    }
    return this.items.reduce((a,b) => a+b);
  }
  
  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length;
  }
}



module.exports = SortedList;
