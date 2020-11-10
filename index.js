class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // push item on array items
    this.items.push(item);

    //sort items array
    this.items.sort(function(a,b) {return a-b});

    // update length
    this.length = this.items.length;
  }

  get(pos) {
    if(pos >= this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    if(!this.length){
      return 0;
    }
   return this.items.reduce((acc, elem) => acc+elem);;
  }

  avg() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
