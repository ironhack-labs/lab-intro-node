class SortedList {
  constructor() {
    this.items =[];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=> a-b);
  }

  

  get(pos) {
    if(pos < 0 || pos >= this.items.length){
      throw new Error("OutOfBounds");
    }
       return this.items[pos];
       
      }

      
  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");

    }
     return this.items[this.items.length - 1]
  }

  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");

  }
  return this.items[0]
}

  sum() {
    if (this.items.length === 0) {
      return 0;
  }
  return this.items.reduce((acc, current) => acc + current, 0);
}




  avg() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
 return this.items.reduce((acc,current) => acc + current, 0) / this.items.length;
}

  }



module.exports = SortedList;
