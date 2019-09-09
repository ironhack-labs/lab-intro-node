class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;

    }
    add(item) {

      this.items.push(item);
      this.items.sort((x, y) => x - y);
      this.length = this.items.length;

    }
    get(pos) {
      return this.items[pos];
    }
    max() {
      if(this._isEmpty()) throw new Error("EmptySortedList");
      return Math.max(...this.items); 
    }
    min() {

      if(this._isEmpty()) throw new Error("EmptySortedList");
      return Math.min(...this.items); 

    }
    average() {
      if(this._isEmpty()) throw new Error("EmptySortedList");
      return this.items.reduce((ac, item) => ac + item)/this.items.length;
      
    }
    sum() {
      if(this._isEmpty()) return 0;
      
      return this.items.reduce((ac, item) => ac + item);
    }

    _isEmpty() { 
      return (this.items.length === 0) ? true : false;
    }
  };
  
  module.exports = SortedList;