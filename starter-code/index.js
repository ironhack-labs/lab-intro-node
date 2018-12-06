class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
     this.items.push(item);
     this.length++;
     this.items.sort((a,b) => a-b)
     
  }
  get(pos) {
    return this.items[pos-1];
   
  }
  max() {
    if (this.items.length === 0) {throw new Error("EmptySortedList")} else{
      return this.items[this.items.length-1]
    }
  }

  min() {
    if (this.items.length === 0) {throw new Error("EmptySortedList")} else{
      return this.items[0]
    }


  }
  average() {
    
    if (this.items.length === 0) {throw new Error("EmptySortedList")} else{
      return this.sum() / this.length;
    }
  }
  sum() {
      return this.items.reduce(function(acc,curr){
      return acc + curr
    },0) 
  }
};

module.exports = SortedList;

