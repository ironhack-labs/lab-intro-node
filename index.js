class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
    
  }

  get(pos) {
    if (pos ===this.length - 1 || pos < this.length && pos > 0){
      return this.items[pos]
    }else {
      throw new Error('OutofBounds');
    }
  }
  

  max() {
    if(this.length === 0 ) {
      throw new Error('EmptySortedList');
    }else{ 
      return Math.max(...this.items)
  }
}

  min() {
    if(this.length === 0 ) {
      throw new Error('EmptySortedList');
    }else{ 
      return Math.min(...this.items)
  }
}

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++){
      sum +=this.items[i];
    }
    return sum;
  }

  avg() {
    if (this.items.length <= 0){
    throw new Error ('EmptySortedList');
  }
  let sum = 0;
  for (let i = 0; i < this.items.length; i++){
    sum +=this.items[i];
  }
  return sum/this.items.length;
    }
  }


module.exports = SortedList;
