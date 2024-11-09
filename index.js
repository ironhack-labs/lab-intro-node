class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    const index = this.items.findIndex ((current) => current > item );
    if (index ==-1){
      this.items.push (item);
      
    }
    else {
      this.items.splice (index, 0, item); 
    }
    this.length++
  }

  get(pos) {
    if (pos > this.items.length - 1 || pos < 0){
      throw new Error("OutOfBounds");
    }
    else {
      return (this.items [pos]);
    }

  }

  max() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    else {
      const max = this.items.reduce ((acc, current) => current > acc ? current : acc); 
      return max; 
    }
  }

  min() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    else {
      const min = this.items.reduce ((acc, current) => current < acc ? current : acc); 
      return min; 
    }
  }

  sum() {
    if (this.items.length == 0){
      return 0; 
    }
    else {
      const sum = this.items.reduce ((acc, current) => current + acc); 
      return sum; 
    }
  }

  avg() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    else {
      const sum = this.items.reduce ((acc, current) => current + acc); 
      const avg = sum /this.items.length;
      return avg; 
    }
  }

}

module.exports = SortedList;
