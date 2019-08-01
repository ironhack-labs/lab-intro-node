class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;


    }
    add(item) {
      this.items.push(item);
      this.length++;
      this.items.sort();
    }

    get(pos) {
      if (this.length = 0) {
        throw new Error('OutOfBounds');
      } else {
      return this.items[pos];
      } 
    }

    max() {
      if (this.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items.reduce(function(a,b) {
        Math.max(a,b)
        });
      }
    }

    min() {
      if (this.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items.reduce(function(a,b) {
        Math.min(a,b)
        });
      }
      
    }
    average() {
      if (this.length == 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items.reduce(function(a,b){
          return a + b 
        }, 0) / this.items.length;
      }

    }

    sum() {
      if (this.length == 0) {
        return 0;
      } else {
        return this.items.reduce(function(a,b){
          return a + b
        }, 0);
      }
      
    }
  
  
  };
  
  module.exports = SortedList;