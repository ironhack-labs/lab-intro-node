class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  };

  add(items) {
    this.items.push()
    // this.items.sort(function (a, b) {
    //   return a - b;
    // });
    this.items.sort((a, b) => a - b);

    this.length = this.items.length
  };

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  };

  max() {
    if (this.items.length <= 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max.apply(null, this.items);
    }
  };

  min() {

    if (this.items.length <= 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.min.apply(null, this.items);
    }

  };

  sum() {
   if (this.items.length <= 0){
     return 0
   } else{
     return this.items.reduce((a,b)=> a+b)
   }
  };

  avg() {
    if (this.items.length <= 0){
      throw new Error('EmptySortedList');
    } else {
      return (this.items.reduce((a,b)=> a+b)) / this.items.length
    }
  }
}

module.exports = SortedList;