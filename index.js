class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length
  }

  get(pos) {
    if(pos[i]> this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[i];
    }
  }

  max() {
    if(this.length == 0 ){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(this.items);
    }
  }

  min() {
    if(this.length == 0 ){
      throw new Error('EmptySortedList');
    } else {
      return this.items.min();
    }
  }

  sum() {
    if(this.length == 0 ){
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b);
    }
  }

  avg() {
    if(this.length == 0){
      throw new Error('EmptySortedList');      
    } else {    
      function average() {
        this.items.reduce((a, b) => (a + b)) / this.items.length;
    }
    return average;
  }
  }
}



module.exports = SortedList;
