class SortedList {
  constructor() {
    this.items =[];
    this.length = this.items.length;
  }

  add(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    if(pos>this.items.length || this.items.length === 0 || this.items[pos] === ''){
    throw new Error('OutOfBounds');}
     return [this.items[pos]];
  }

  max() {
    if(this.items.length === 0){
    throw new Error('EmptySortedList');
    } return Math.max(...this.items);
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
      } return Math.min(...this.items);
  }

  sum() {
  let total= 0;
  for(let i=0; i < this.items.length; i++){
    total += this.items[i];
  } return total;
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
      } let total = 0; for(let i=0; i < this.items.length; i++){
        total += this.items[i];
      } let average = total/this.items.length;
       return average;
    }
  }

module.exports = SortedList;
