class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items = this.items.sort(function(a, b){return a-b});
  }

  get(pos) {
    if(pos>this.length){
      throw new Error('OutOfBounds');
     } else{
      return this.items[pos];
     }
  }

  max() {
    if(this.length<1){
      throw new Error('EmptySortedList');
     } else{
      return Math.max(...this.items);
     }
  }

  min() {
    if(this.length<1){
      throw new Error('EmptySortedList');
     } else{
      return Math.min(...this.items);
     }
  }

  sum() {
    if(this.length<1){
      return 0;
     } else{
      return this.items.reduce((acc,item)=>acc + item);
     }
  }

  avg() {
    if(this.length<1){
      throw new Error('EmptySortedList');
     } else{
      return this.items.reduce((acc,item)=>acc + item)/this.length;
     }
  }
}

module.exports = SortedList;
