class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length ++
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if(this.items[pos]===undefined){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    this.items.sort(function(a, b) {
      return b - a;
    });
    return this.items[0]
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    this.items.sort(function(a, b) {
      return a - b;
    });
    return this.items[0]
  }

  sum() {
    if(this.items.length === 0){
      return 0
    }
    return this.items.reduce((a, b)=> a+b)
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    let total = this.items.reduce((a, b)=> a+b)
    return total / this.length

  }
}

module.exports = SortedList;
