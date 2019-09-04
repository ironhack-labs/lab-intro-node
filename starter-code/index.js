class SortedList {
    constructor(item, length, pos) {
      this.items = [];
      this.length = this.items.length;
      
    }

    add(item) {
      this.items.push(item)
      this.items.sort(function(a,b){return a>b ? 1 : a<b ? -1 : 0;});
      this.length = this.items.length;
    }

    get(pos) {
          return this.items[pos];
        }


    max() {
      if(this.items.length === 0){
        throw new Error ('EmptySortedList')
      }else {
        return this.items[this.items.length -1]
      }
    }
    min() {
      if (this.items.length === 0){
        throw new Error ('EmptySortedList')
      }else {
        return this.items [0]
      }
    }
    average() {
      if (this.items.length === 0){
        throw new Error ('EmptySortedList')
      }else {
        return this.items / this.items.length
      }
    }
    sum() {}
  };
  
  module.exports = SortedList;