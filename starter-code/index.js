class SortedList {
    constructor() {
      this.length = 0;
      this.items = []; 
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length++;
    }
    get (pos) {
      if (this.items[pos - 1] === null) {
        throw new Error("Out of bounds");
      }
      return this.items[pos];
    }
    max() {
      this.isListEmpty();
      return this.items[this.length - 1];
    }
    min() {
      this.isListEmpty();
      return this.items[0];
    }
    average() {
      this.isListEmpty();
      return this.sum() / this.length; 
    }
    sum() {
      return this.items.reduce((a, b) => a + b, 0);
    }
    isListEmpty() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      }
    }
  };

  const sl = new SortedList();
  console.log(sl.length);
  sl.add("a");
  console.log(sl.get(0));
  
  module.exports = SortedList;