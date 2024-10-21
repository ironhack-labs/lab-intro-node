class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
      this.items.push(item);
      this.items.sort((a,b) => a-b)
      this.length = this.items.length
    
  }

  get(pos) {
    if(pos >= 0 && pos< this.items.length){
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.items.length > 0){
      return this.items.reduce((a,b) => Math.max(a,b) , -Infinity) 
      //return Math.max(...this.items) is also a solution that works :)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.items.length > 0){
      return this.items.reduce((a,b)=> Math.min(a,b), Infinity)
    } else {
      throw new Error('Empty SortedList')
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0
    } else {
      return this.items.reduce((acc,currentValue) => acc += currentValue, 0)
    }
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("Empty sortedList");
      
    } else {
      return this.items.reduce((acc,currentValue) => acc += currentValue, 0)/this.items.length
    }
  }
}

module.exports = SortedList;
