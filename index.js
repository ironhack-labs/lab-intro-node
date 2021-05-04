class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length
  }

  get(pos) {
    if(pos > this.length /*|| !pos*/){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      const highestVal = Math.max(...this.items);
      return highestVal
    }
  }

  min() {
    if(this.length === 0){
    throw new Error('EmptySortedList');
  }else{
    const lowestVal = Math.min(...this.items);
    return lowestVal
  }}

  sum() {
    let total = 0;
    const sum = this.items.map((item)=>{
      total +=item
    })
    return total
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.sum() / this.length
    }
    
  }
}

module.exports = SortedList;
