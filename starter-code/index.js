class SortedList {
    constructor(){
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b)
      this.length++;
    }
    get(pos) {
      if(pos > this.length){
      throw new Error("OutOfBounds");
      }else{
      return this.items[pos];
    }
  }
    max() {
      if(!this.length){
      throw new Error("EmptySortedList");
      }else{
      return this.items[this.length - 1]
    }
  }
    min() {
      if(!this.length){
        throw new Error("EmptySortedList");
        }else{
        return this.items[0];
      }
    }

    average() {
      if(!this.length){
        throw new Error("EmptySortedList");
        }else{
        return this.sum() / this.length;
      }
    }
    sum() {
      if(!this.length){
        return 0;
        }else{
        let totalSum = this.items.reduce((counter, eachItem) => counter+= eachItem)
        return totalSum;
      }


    }
  };
  
  module.exports = SortedList;