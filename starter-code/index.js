class SortedList { 
  constructor() {
    this.items = [],
    this.length = 0
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    
  }
  get(pos) {
  if (pos <= this.length) return this.items[pos-1];

  }
  max() {

  }
  min() {

  }
  average() {

  }
  sum() {
     
  }
};

module.exports = SortedList;



