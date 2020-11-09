class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] !== undefined){
      return this.items[pos];
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      var max = this.items.reduce(function(a, b) {
        return Math.max(a, b);
      });
      return max;
    }}

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      var min = this.items.reduce(function(a, b) {
        return Math.min(a, b);
      });
      return min;
    }}

  sum() {
    if(this.items.length === 0){
      return 0;
    }else{
    return this.items.reduce((a, b)=> a+b);
  }}

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items.reduce((a, b)=> a+b)/this.length;
    }
  }
}

module.exports = SortedList;
