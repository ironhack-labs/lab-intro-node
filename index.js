class SortedList {
  constructor() {
   this.items = [];
   this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b)=>{
      return a-b;
    });
    this.length = this.items.length;

  }

  get(pos) {
      if (pos>(this.length-1)) {
        throw new Error('OutOfBounds');
      }
      return (this.items[pos]);

  }

  max() {
  if (this.length===0) {
    throw new Error('EmptySortedList');
  } else {
    let reverseArray = this.items.reverse();
    return reverseArray[0];
  }
  }

  min() {

    if (this.length===0) {
      throw new Error('EmptySortedList');
    } 
    return this.items[0];

  }

  sum() {
    if (this.length===0) {
      return 0;
    }
   
    let sum = this.items.reduce((acc,curr)=>{
   return acc+curr;
    } )
    
    return sum;
     
  }

  avg() {
    if (this.length===0) {
      throw new Error('EmptySortedList');
    }
  return this.sum()/this.length
  }
}

module.exports = SortedList;
