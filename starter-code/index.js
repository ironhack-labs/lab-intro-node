class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }
  
  get(pos) {
    return this.items('',pos)
  }
  max() {}
  min() {}
  average() {}
  sum() {}

};



module.exports = SortedList;
