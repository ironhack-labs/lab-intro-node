class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length= this.items.length;

  }

  add(item) {
        
    this.items.push(item);
    if( this.items.length > 1 ){
      this.items.sort(function(a, b){return a-b});
    }    
    
    this.length = this.items.length;
  }

  get(pos) {

    if ( pos < this.length){
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if( this.length === 0 ){
      throw new Error('EmptySortedList');
    }

    return Math.max(...this.items);

  }

  min() {

    if( this.length === 0 ){
      throw new Error('EmptySortedList');
    }

    return Math.min(...this.items);

  }

  sum() {

    if( this.length === 0 ){
      return 0;
    }

    let totalSum=0;
    for (let item in this.items){
      totalSum+=this.items[item];
    }
    return totalSum;
  }

  avg() {
    if( this.length === 0 ){
      throw new Error('EmptySortedList');
    }

    let totalSum=0;
    for (let item in this.items){
      totalSum+=this.items[item];
    }
    return totalSum/this.length;



  }
}

module.exports = SortedList;
