class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.sort();
    
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    this.isEmptySortedListException();
    return this.get(this.length);
  }
  min() {
    this.isEmptySortedListException();
    return this.get(1);
  }
  average() {
    this.isEmptySortedListException();
    return this.sum() / this.length;
  }
  sum() {
    return this.items.reduce(((anterior, actual) => anterior + actual),0);
  }

  isEmptySortedListException() {
    if (this.length === 0) throw new Error("EmptySortedList");
  }

  sort(){
    this.items.sort((a, b)=>a-b);
  }


};

module.exports = SortedList;
