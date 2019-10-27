class SortedList {
    constructor() {
      this.item = [];
    }

    get length(){
      return this.item.length
    }

    add(item) {
     this.item.push(item);
     this.item.sort((a, b) => a - b)
    }

    get(pos) {
      if(pos > this.item.length){
        throw new Error("OutOfBounds")
      }
      return this.item[pos]
    }

    max() {
      if(this.item.length === 0){
        throw new Error("EmptySortedList")
      }
      return this.item.reduce((a, b) => {
        return Math.max(a, b);
      });
    }

    min() {
      if(this.item.length === 0){
        throw new Error("EmptySortedList")
      }
      return this.item.reduce((a, b) => {
        return Math.min(a, b);
      });
    }

    average() {
      if(this.item.length === 0){
        throw new Error("EmptySortedList")
      }

      return this.sum() / this.item.length
    }

    sum() {
      if(this.item.length === 0){
        return 0
      }
      return this.item.reduce((a, b) => {
        return a + b
      })
    }
  };
  
const sl = new SortedList();

module.exports = SortedList;