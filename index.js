class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
    
  add(item) {
    this.items.push(item);
    this.items.sort(function( a , b){
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
      });
    this.length = this.items.length;
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
