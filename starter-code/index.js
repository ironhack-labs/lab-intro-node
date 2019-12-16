class SortedList {
  constructor ( items , length ) {
    this.items = [];
    this.length = 0;
  }

  itemsSort() {
    this.items.sort((a, b) => a - b);
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if ( pos > this.items.length - 1 || pos < 0 ){ 
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    this.items.sort(function(a, b) {
      return a - b;})
    if ( this.length === 0 ) {
      throw new Error("EmptySortedList"); 
    }
    return this.items[this.items.length - 1];

  }

  min() {
    this.items.sort(function(a, b) {
      return a - b;})
    if ( this.length === 0 ) {
      throw new Error("EmptySortedList"); 
    }
    return this.items[0];
  }

  sum() {
    // const reducer = (acc, e) => acc + e;
    if ( this.length === 0 ) {
      return 0; 
    }
    return this.items.reduce((acc, e) => acc + e);
  }

  avg() {
    if ( this.length === 0 ) {
      throw new Error("EmptySortedList"); 
    }
    return (this.items.reduce((acc, e) => acc + e)) / this.items.length;
  }
}

module.exports = SortedList;
