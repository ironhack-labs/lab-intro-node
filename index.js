class SortedList {
  constructor() {
    this.items = [] ;
    this.length = this.items.length ;
  }

  add(item) {

    this.items.unshift(item);
    this.items.sort((a,b) => {return a - b;});
    this.length = this.items.length
  }

  get(pos) {
    if ( pos >= 0 && pos < this.length ) {
      return this.items[pos]
    }
    else {
      throw new Error(`OutOfBounds`)  
    }
  }

  max() {
    var max;
    var reducer = (acc, cv) => {
      if (cv > acc ) { acc = cv} 
      return acc
    }

    if (this.length) { 
      max = this.items.reduce(reducer);
      return max;

    } else {
      throw new Error(`EmptySortedList`)  
    }
  }

  min() {
    var min;
    var reducer = (acc, cv) => {
      if (cv < acc ) { acc = cv} 
      return acc
    }

    if (this.length) { 
      min = this.items.reduce(reducer);
      return min;

    } else {
      throw new Error(`EmptySortedList`)  
    }
  }
  

  sum() {
    var total;
    var reducer = (acc, cv) => { 
      return acc + cv
    }

    if (this.length) { 
      total = this.items.reduce(reducer);
    } else {
      total = 0; 
    }
    return total;
  }

  avg() {
    var avg;

    if (this.length) { 
      avg = this.sum()/this.length;
      return avg;

    } else {
      throw new Error(`EmptySortedList`)  
    }
  }
}

module.exports = SortedList;
