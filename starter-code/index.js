class SortedList {
    constructor() {
      this.items = [];
    };
      get length(){
        return this.items.length;
      };

    add(x) {
      this.items.push(x);
      this.items = this.items.sort((a, b) => a - b);
    };

    get(i) {
      if(this.length > 0) {
        return this.items[i];
      } else {
        throw new Error("OutOfBounds");
      };
    };

    max() {
      if(this.length !== 0) {
        return this.items[this.length - 1];
      } else {
        throw new Error("EmptySortedList");
      };
    };

    min() {
      if(this.length !== 0) {
        return this.items[0];
      } else {
        throw new Error("EmptySortedList");
      };
    };

    average() {
      if(this.length === 0){
        throw new Error("EmptySortedList");
      } else {
        return this.sum()/this.length;
      }
    }
    sum() {
      if(this.length === 0) {
        return 0;
      } else {
        return this.items.reduce((acc, el) => acc + el, 0);
    }
  }
};
  
module.exports = SortedList;