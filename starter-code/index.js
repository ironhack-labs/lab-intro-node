class SortedList {

    constructor() {
      this.items = [];
      this.length = 0;
    }

    add(item) {
      this.items.push(item);
      this.items.sort((a,b) => a-b);
      this.length ++;
    }

    get(pos) {
      return this.items[pos];
    }


    max() {
      if(this.length ===0){
        throw new Error("EmptySortedList");
      }
      let big = Math.max(...this.items);
      return big;
    }

    min() {
      if(this.length === 0){
        throw new Error("EmptySortedList");
      }
      return this.items[0];
    }

    average() {
      if(this.length === 0){
        throw new Error("EmptySortedList");
      }
      return this.sum()/this.length
    }

    sum() {

      if(this.length === 0){
        return 0;
      }

      return this.items.reduce((a, b) => a + b, 0);
    }

  };
  
  module.exports = SortedList;