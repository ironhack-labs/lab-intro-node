class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(( a , b) => {return a-b});

  }
  

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}



module.exports = SortedList;


//goal here is to create a class 
//that sorts list of numbers in ascending order.