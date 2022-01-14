class SortedList {
  constructor(items, length) {
    this.items=[];
    this.length=this.items.length;}
  
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > 0 && pos < this.length){
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
      }
    }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length === 0){
    throw new Error('EmptySortedList');
  }else{
    return Math.min(...this.items);
  }}

  sum() {
    if(this.items.length !== 0){
     return this.items.reduce((previousValue, currentValue) => previousValue + currentValue);
    }else{
      throw new Error('EmptySortedList');        
    }
}
  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
   // const avg = (sum / this.items.length);
    return this.sum() / this.items.length;
}
}
}
module.exports = SortedList;
