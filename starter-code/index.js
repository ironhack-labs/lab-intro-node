class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length++;
    }
    get(pos) {
      this.items.sort(function (a, b){
        return a - b;
      })

      return this.items[pos];
    }
    max() {
      if(this.length == 0){
        throw new Error("EmptySortedList");
      }else{
        return Math.max(...this.items);
      }
    }
    min() {
      if(this.length == 0){
        throw new Error("EmptySortedList")
      }else{
        return Math.min(...this.items);
      }
    }
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;