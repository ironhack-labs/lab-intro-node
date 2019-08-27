class SortedList {
    constructor() {
      this.items=[];
      this.length=this.items.length;

    }

    add(item) {
     this.length = this.items.push(item);
     this.items.sort((a, b) => a - b);
        }

    get(pos) {
      if(pos > (this.length-1) && pos<0){
        return "outOfBounds";
      }
      else {
        return this.items[pos];
      }
    }

    max() {
      if(this.length == 0){
        throw new Error("EmptySortedList");
      }
      else{
      let popped=this.items.pop();
      return popped;
      }

    }

    min() {
      if(this.length == 0){
        throw new Error("EmptySortedList");
      }
      let shifted=this.items.shift();
      return shifted;

    }
    average() {
      if(this.length == 0){
        throw new Error("EmptySortedList");
      }
      let avg = this.items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0) / this.length;
      return avg;

    }
    sum() {
      let sum = this.items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      return sum;

    }
  }

  
  module.exports = SortedList;