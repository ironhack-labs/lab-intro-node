class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
   if(this.items[pos] === undefined){
    throw new Error('OutOfBounds');
   } 
   return this.items[pos];  
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

  sum() { 
    let sum = 0
    for(let i = 0; i < this.items.length; i++){
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    };
    let sum = 0;
    let average = 0;
    for(let i = 0; i < this.items.length; i++){
      sum += this.items[i];
    };
    average = sum / this.items.length;
    return average;
  }
}

module.exports = SortedList;
