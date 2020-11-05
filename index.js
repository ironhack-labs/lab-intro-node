

class SortedList {

  constructor() {
    this.items = [];
    this.length = this.items.length;
   }

  add(item) {
    
  /*   if (!this.items.length){
      throw new Error('EmptySortedList');
    }  */
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a,b) => a-b);
    
  }

  get(pos) {
    
    if (this.items.indexOf(pos) === -1){
      throw new Error('OutOfBounds')
    }
    return this.items.indexOf(pos);

  }

  max() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
    return Math.min(...this.items);
    }
  }

  sum() {
    if (!this.items.length){
      return 0;
    } ;
    return this.items.reduce((a, b) =>  a + b );
    
  }

  avg() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    };
    
    return this.sum()/this.items.length;
    
}
}
module.exports = SortedList;
