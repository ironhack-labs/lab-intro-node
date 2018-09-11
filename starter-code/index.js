class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this.items = this.items.sort(function(a,b){
      return a- b; 
    });
    this.length = this.items.length;
  }

  get(nth) {
   return this.items[nth-1]
  }

  max() {
    if (this.length >= 1){
      return this.items.pop();
    }else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length >= 1){
      return this.items.shift()
    } else {
      throw new Error("EmptySortedList");
    }
  }

  average() {
    if(this.length < 1){
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce(((a, b) => a + b))/this.length;
    }
  }

  sum() {
    if(this.length < 1){
      return 0
    } else {
   return this.items.reduce(((a, b) => a + b));
    }
  }
};

module.exports = SortedList;
