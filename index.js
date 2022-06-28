class SortedList {
  constructor(items, length) {
      this.items = [];
      this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b) {
      return a - b;
    })
    this.length = this.items.length
  }

  get(pos) {
    if (this.items.length < pos) {
      throw new Error('OutOfBounds'); 
    } else {
      return this.items[pos];
    }
  };

  max() {
    if ( this.items.length ===  0 ) {
      throw new Error('EmptySortedList');
    } else {
      const max = Math.max(...this.items);

      return max;
    }
  }
     
  
  min() {
    if ( this.items.length ===  0 ) {
      throw new Error('EmptySortedList');
    } else {
      const min = Math.min(...this.items);
    return min;
    }
  }

  sum(items) {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++)
      sum += this.items[i];
    return sum; 
    }

  avg() {
  
    if ( this.items.length ===  0 ) {
      throw new Error('EmptySortedList');
    } else {
      const average = this.items.reduce((a,b) => a + b, 0) / this.items.length;
      return average; 
    }
  }
}

let item = new SortedList()

// item.add();
// item.get();
// item.min();
// item.sum();
// item.avg();


module.exports = SortedList;
