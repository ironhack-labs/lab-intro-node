class SortedList {
  constructor() {
  
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    let position;
    if (this.length < pos) {
      throw new Error('OutOfBounds');
    } else {
      position = this.items.indexOf(pos);
      return position
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');      
    } else {
      return Math.max(...this.items);
    }
   }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');      
    } else {
      return Math.min(...this.items);
    }
     }

  sum() {
    if (this.items.length === 0) {
      return 0;      
    } else {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum = this.items[i] + sum
      }
      return sum
      }
    }     
  

  avg() {


}}



module.exports = SortedList;
