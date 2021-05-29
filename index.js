class SortedList {
  constructor() {
    this.items= [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push (item);
    this.items.sort(function(a, b){return a-b})
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {    if (this.length === 0){
    throw new Error('EmptySortedList');
  }
  return this.items[0];}

  sum() {
    if(this.length === 0){return 0;}
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = this.items.reduce(reducer);
    return sum; 
  }

  avg() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      let avg = this.sum()/this.length;
      return avg;
    }
  }
}

module.exports = SortedList;
