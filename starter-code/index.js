class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a,b)=>a-b);
      this.length += 1;
    }
    get(pos) {
      return this.items[pos];
    }
    max() {
      if(this.length){
          return this.items[this.length - 1];
      }
      throw new Error('EmptySortedList')
    }
    min() {
      if(this.length){
        return this.items[0];
      }
      throw new Error('EmptySortedList')
    }
    average() {
      if(this.length){
        return this.items.reduce((total,current) => total + current)/this.length;
      }
      throw new Error('EmptySortedList')
    }
    sum() {
      if(this.length){
        return this.items.reduce((total,current) => total + current)
      }
      return 0;
    }
  };
  
  module.exports = SortedList;


 