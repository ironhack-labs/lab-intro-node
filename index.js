class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b) // a - b: Ascending order / b - a: Descending order.
    this.length = this.items.length;  
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }


  
  max() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }
/*()
      7) should return an EmptySortedList exception if there is no elements in the list
      8) should return the max (highest) value in the list
    #min()*/

  
  min() {  if(this.items.length == 0){
    throw new Error('EmptySortedList');
  }
  return Math.min(...this.items);
}
  /*(should return an EmptySortedList exception if there are no elements in the list
  10) should return the min (lowest) value in the list
  */

  sum() {let sum = 0; 
    if (this.items.length == 0 )  
      return sum ; 
    else  {
      sum = this.items.reduce((acc, current) => acc + current, 0);
      //for (let i = 0; i < this.items.length; i++) { sum += this.items[i]; } 
    }

    return sum;}


  avg() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length;
  }
}

module.exports = SortedList;


/* add(item) {
    try {
          this.items.push(item);
    this.items.sort((a,b) => a - b) // a - b: Ascending order / b - a: Descending order.
    this.length = this.items.length; ;
    } catch (error) {
      console.error(error);
      // Expected output: ReferenceError: nonExistentFunction is not defined
      // (Note: the exact output may be browser-dependent)
    } */