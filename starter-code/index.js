class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items = this.items.sort(( a, b) => {return a-b;});
  }
  get(pos) {
    this.length = this.items.length;
    return this.items[pos-1];

  }
  max() {

    let maxItem = this.items.sort(( a, b) => {return b-a;});
    if(maxItem.length === 0){ 
      throw new Error ("EmptySortedList");
    }
    return maxItem[0];
  }
  min() {
    let minItem = this.items.sort(( a, b) => {return a-b;});
    if(minItem.length === 0){ 
      throw new Error ("EmptySortedList");
    }
    return minItem[0];
  }
  
  sum() {
    if (this.items.length === 0){
      return 0;
    }
    return this.items.reduce((acc, curr) => {
      return acc + curr;
    })
  }
  average() {
    if(this.items.length === 0){ 
      throw new Error ("EmptySortedList");
    }
    let result= this.sum() / this.items.length;
    return result;
  }
};

module.exports = SortedList;
