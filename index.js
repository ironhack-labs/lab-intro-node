class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
   this.items.push(item);
   this.items.sort(function(a, b) {
    return a - b;
  });
  this.length = this.items.length;
  }

  get(pos) {
    if(pos < this.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items == 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items) 
    }
  }

  min() {
    if(this.items == 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.min(...this.items) 
    }
  }

  sum() {
    if(this.items == 0){
      return 0;
    }else{
      return this.items.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    },0)
    }

  }

  avg() {
    if(this.items == 0){
      throw new Error('EmptySortedList');
    }else{
      return this.sum() / this.length
    }
}
}
module.exports = SortedList;
