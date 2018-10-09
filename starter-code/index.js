class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) =>{
      return a-b;
    } )
  }

  get(pos) {
    if (pos > this.items.length){
      return false;
    } else {
      this.length = this.items.length;
      return this.items[pos-1];
      
    }
  }

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    let max = 0;
    
    this.items.forEach((item, index) => {
      if (item > max) {
        max = item;
      }
    })
    return max;
  }


  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }
  
  average() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.items.length;
  }
  
  sum() {
    if (this.items.length === 0){
      return 0;
    }

    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
    
  }
};

module.exports = SortedList;
