class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.unshift(item);
    this.items.sort((a,b)=>a-b));
    this.length=this.items.length;
  }
    

  get(pos) {
    
    if (this.items.length>pos){
      let getElement = this.items[pos]
      return getElement;
    } else {
      throw new Error('OutOfBounds');
    }
    

  }

  max() {
    if (this.items.length===0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }

    /*The max() method should return the highest value of the array.

In case you have an empty SortedList, you must throw an error with the message "EmptySortedList". For this, you can use:

throw new Error('EmptySortedList');
    */ 
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
