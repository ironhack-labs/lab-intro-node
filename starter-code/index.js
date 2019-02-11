class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    if (x != undefined){
      this.length ++;
      this.items.push(x)
      this.items.sort((a,b)=>{return a-b})   
    }
  }
  get(i) {
    if (i < this.items.length && i >= 0){
      return this.items[i];
    }
  }
  max() {
    if (this.items.length == 0){
      throw new Error ('EmptySortedList');
    }else {
      return this.items[this.items.length -1];
    }
  }
  
  min() {
    if (this.items.length == 0){
      throw new Error ('EmptySortedList'); 
    }else {
      return this.items[0];
    }
  }
  sum() {
    if (this.items.length == 0){
      return 0; 
    }else {
      let sum = this.items.reduce((acc, val ) => acc + val, 0);
      return sum;
    }
  }
  average() {
    if (this.items.length == 0){
      throw new Error ('EmptySortedList'); 
    }else { 
      return this.items.reduce((acc, val ) => acc + val, 0)/this.items.length;
    }
  }
};

module.exports = SortedList;
