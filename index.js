class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
  });
    this.length = this.items.length;

}

  get(pos) {
    if (this.items.length <= pos) {
      throw new Error('OutOfBounds');
    } else {
        return this.items[pos]; 
    }
  }

  max() {
    if (this.items.length === 0) {
    throw new Error('EmptySortedList'); 
    } else {
    return this.items[this.items.length-1]

    }
  }


  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList'); 
      } else {
      return this.items[0]
  
      }
    }
  

  sum() {
    
  }

  avg() {}
}

module.exports = SortedList;
