class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.items.length -1 ) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(!this.items[0]){
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length-1];
  }

  min() {
    if(!this.items[0]){
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    let sum = 0;
  this.items.forEach(num => {
      sum += num;
    });
    return sum;
  }

  avg() {

    if(!this.items[0]){
      throw new Exception('EmptySortedList');
    }

    let sum = 0;
    this.items.forEach(num => {
      sum += num;
    });
    return sum/this.items.length;
  }
}

module.exports = SortedList;
