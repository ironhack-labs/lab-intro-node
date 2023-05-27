class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item);
      this.length += 1;
      return this.items.sort(function(item,b) {return item-b});
  }

  get(pos) {
    if (pos > this.items.length){
      throw new Error('OutOfBounds');
    }
    else{
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length < 1){
      throw new Error('EmptySortedList');
    }
    else {
      return Math.max.apply(Math, this.items);
    }
  }

  min() {
    if (this.items.length < 1){
      throw new Error('EmptySortedList');
    }
    else {
      return Math.min.apply(Math, this.items);
    }
  }

  sum() {
    let sum = 0;

    this.items.forEach(item => {
      sum += item;
    });
    return sum;
  }

  avg() {
    if (this.items.length > 0){
      let avg = this.sum()/this.items.length;
      return avg;
    }
    else {
      throw new Error ('EmptySortedList');
    }
  }
}

module.exports = SortedList;
