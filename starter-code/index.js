class SortedList {

    constructor() {
      this.items = [];
      this.length = 0;
    }

    // add a single value to array, then sort
    add(item) {
      this.items.push(item);
      this.items.sort((a,b) => a-b);
      this.length ++;
    }

    // get number at position index of array
    get(pos) {
      return this.items[pos];
    }

    // get biggest number
    max() {
      if(this.length ===0){
        throw new Error("EmptySortedList");
      }
      let big = Math.max(...this.items);
      return big;
    }

    // get smallest number
    min() {
      if(this.length === 0){
        throw new Error("EmptySortedList");
      }
      return this.items[0];
    }

    // get average; calls sum then divide by length of array
    average() {
      if(this.length === 0){
        throw new Error("EmptySortedList");
      }
      return this.sum()/this.length
    }

    // get sum
    sum() {
      if(this.length === 0){
        return 0;
      }
      return this.items.reduce((a, b) => a + b, 0);
    }

  };
  
  module.exports = SortedList;