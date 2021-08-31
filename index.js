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

    this.length++;
  }

  get(pos) {

    if(pos > this.length - 1 || pos < 0){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }

  max() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[this.length - 1];
    }
  }

  min() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0];
    }
  }

  sum() {

    let sum = 0;

    this.items.forEach(i => {

      sum += i;
      
    });

    return sum
  }

  avg() {

    if(this.length == 0){
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.length;

  }
}

module.exports = SortedList;
