    //iteration 1: object should have 2 properties: 
    //items = [] && length = elements in the array. 
class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
    //iteration 2: add value of item into items array, 
    //then sort in ascending order.
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(( a , b) => {return a-b});

  }
  

  get(pos) { 
      if ((this.items.indexOf(pos) === -1)){
        throw new Error('OutOfBounds');
      } else return this.items.indexOf(pos);
    }
  

  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else return Math.max(...this.items);

  }

  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
  } else return Math.min(...this.items);
}


  sum() {
    if(this.items.length === 0) {
      return 0;
    } else return this.items.reduce((a, b) => a + b, 0);
}

  avg() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
  } else return this.items.reduce((a, b) => a + b, 0) / this.items.length;
}
}


module.exports = SortedList;


//goal here is to create a class 
//that sorts list of numbers in ascending order.