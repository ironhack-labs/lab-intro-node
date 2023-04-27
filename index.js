class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  } 

  add(item) {

    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;

  };

  get(pos) {
      if ((pos) > this.items.length) {
      throw new Error('OutOfBounds');
    } else  {
      return this.items.indexOf(pos) 
    }
  }

  max() {

    if (!this.items.length) {
    throw new Error('EmptySortedList');
    } else {
      return (Math.max(...this.items));
    }
  };

  min() {

    if (!this.items.length) {
      throw new Error('EmptySortedList');
      } else {
        return (Math.min(...this.items));
      }
  };

  sum() {

    if (!this.items.length) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b)
    }
  }

  avg(sum) {
    
    // !array.length is the same as writing array.length === 0
    if (!this.items.length) throw new Error('EmptySortedList');

    sum = 0; 
    this.items.forEach((element) => {
    sum += element;
    });
    return sum / this.items.length;
}
}

module.exports = SortedList;
