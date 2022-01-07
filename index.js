class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    const push = this.items.push(item);
    const ascending = this.items.sort((a,b) => a - b);
    this.length++;
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error('OutOfBounds');
    } else{
     return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0];
    }
  }

  sum() {
    if(this.length === 0){
      return 0;
    }else{
      return this.items.reduce((a, b) => a+b);
    }
   
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      let soma =this.items.reduce((a, b) => a+b);
      return soma/this.length;
      
    }
  }
}

module.exports = SortedList;
