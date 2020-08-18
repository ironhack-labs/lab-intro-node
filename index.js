class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(a,b){return a- b});
   
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }else {
      return this.items[pos]; 
    }
  }

  max() {
    if (this.length === 0 ){
      throw new Error('EmptySortedList');
    }else {
       return  Math.max.apply(Math, this.items);
    }
  }

  min() {
    if (this.length === 0 ){
      throw new Error('EmptySortedList');
    }else {
       return  Math.min.apply(Math, this.items);
    }
  }

  sum() {
    if ( this.length === 0) {
      return 0 ;
    } else {
      let sum = this.items.reduce(function(a, b){
        return a + b;
      }, 0);
      return sum;
    }
  }

  avg() {
    if ( this.length === 0 ){
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce(function(a, b){
        return a + b;
      }, 0);
      let avg = sum / this.length;
      return avg;
    }
   
  }
}

module.exports = SortedList;
