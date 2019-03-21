class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) { return a - b; });
    this.length++;
  }
  get(pos) {
    if (pos < this.length) return this.items[pos];
  }
  max() {
    if (this.length === 0) { throw new Error('EmptySortedList'); }
    else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0) { throw new Error('EmptySortedList'); }
    else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.length === 0) { throw new Error('EmptySortedList'); }
    else {
      return ( this.sum() / this.length );
    }
  }
  sum() {
    if (this.length === 0) { return 0; }
    else {
      return this.items.reduce(function(valorAnterior, valorActual){
        return valorAnterior + valorActual;
      });
    }
  }
};

module.exports = SortedList;
