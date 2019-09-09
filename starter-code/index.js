class SortedList {
    constructor(items, length) {
      this.items = []
      this.length = 0;
    }
    add(item) {
      this.items.push(item); 
      this.items.sort(function(a,b){return a - b});
      this.length++;
    }
    get(pos) {
      if(pos > this.items.length){
        throw new Error("OutOfBounds")
      }else{
        return this.items[pos]
      }
    }
    max() {
      if(this.items.length == 0){
        throw new Error("EmptySortedList")
      }else{
        return Math.max(...this.items)
      }
    }
    min() {
      if(this.items.length == 0){
        throw new Error("EmptySortedList")
      }else{
        return Math.min(...this.items)
      }
    }
    average() {
      if(this.items.length == 0){
        throw new Error("EmptySortedList")
      }else{
        return (this.items.reduce(function(a, b){return (a + b)})) / this.length;
      }
    }
    sum() {
      if(this.items.length == 0){
        return 0;
      }else{
        return this.items.reduce(function(a, b){return a + b});
      }
    }
  };

  module.exports = SortedList;