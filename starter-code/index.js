class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(x) {
      this.items.push(x);
      this.items.sort((a,b)=>a-b);
      this.length = this.items.length;
    }
    get(pos) {
      return this.items[pos]; 
    }
    max() {
      if (this.items.length === 0) throw new Error("EmptySortedList"); 
      return this.items[this.length-1]; 
    }
    min() {
      if (this.items.length === 0) throw new Error("EmptySortedList"); 
      return this.items[0]; 
    }
    average() {
      if(this.items.length === 0) throw new Error("EmptySortedList");
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.items.length;
    }
    sum() {
      if(this.items.length === 0) return 0; 
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
  };
  
  module.exports = SortedList;
  let sl = new SortedList(); 
  //sl.add("wasser"); 
  