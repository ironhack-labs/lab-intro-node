let chalk = require('chalk');

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    let sortedArr = this.items.sort((a, b) => a - b);
    return sortedArr[pos - 1];
  }
  max() {
    if(this.items.length <= 0){
      throw new Error('EmptySortedList');
    } else{
      return Math.max(...this.items); 
    }
  }
  min() {
    if(this.items.length <= 0){
      throw new Error('EmptySortedList');
    } else{
      return Math.min(...this.items); 
    }
  }
  average() {
    if(this.items.length <= 0){
      throw new Error('EmptySortedList');
    } else{

    let sum = this.items.reduce((acc, current) => {
      return acc + current ;
    },0);

    return sum / this.items.length;
  
  }
  }
  sum() {
    if(this.items.length <= 0){
      return 0;
    } else{
    return this.items.reduce((acc, current) => {
      return acc + current ;
    },0);}
  }
}

;

// let sm = new SortedList;
// sm.add(30);
// sm.add(20);
// sm.add(10);



// console.log(sm.items);
// console.log(sm.max());

module.exports = SortedList;
