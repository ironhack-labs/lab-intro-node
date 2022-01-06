//jshint esversion:8

class SortedList {

  constructor() {
    this.items = [];     // array
    this.length = this.items.length;   // number of elements in the array
  }

  add(item) {
    
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    
    if(!this.items[pos]) {

      throw new Error('OutOfBounds');

    } else {

      return this.items[pos];
    }
  }

  max() {

    if (this.length == 0) throw new Error('EmptySortedList');

    else {
      this.items.sort((a, b) => b - a);
      return this.items[0];
    }
  }

  min() {

    if (this.length == 0) throw new Error('EmptySortedList');

    else {
      this.items.sort((a, b) => a - b);
      return this.items[0];
    }
  }

  sum() {

    let total = 0;

    if (this.length == 0) return 0;

    //else this.items.reduce((total, num) => total + num);
    else {

      for(let i = 0; i < this.length; i++) {

        total += this.items[i];
      }
      return total;
    }
  }

  avg() {

    if (this.length == 0) throw new Error('EmptySortedList');

    let total = this.sum();

    return total / this.length;
  }
}

module.exports = SortedList;
