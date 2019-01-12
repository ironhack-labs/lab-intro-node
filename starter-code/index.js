class SortedList {
  constructor() {
    this.items = [];//items should be an array.
    this.length = this.items.length; //length should be the number of elements in the array.
  }
  add(item) {
    this.items.push(item); //The add(x) method will add x to the items array.
    this.items.sort(function(a,b){
      return (a - b);
    })
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos - 1]; 
  }
  max() {
    if(this.items.length > 0){
      return Math.max.apply(null, this.items);//The max() method should return the highest value of the array.
    }else{
      throw new Error("EmptySortedList")//
    }
  
  }
  min() {
    if(this.items.length > 0){
      return Math.min.apply(null, this.items);//The min() method should return the lowest value of the array.
    }else{
      throw new Error("EmptySortedList")
    }
  }
  sum() {
    if(this.items.length > 0){
      //The sum() method should return the sum value of the array.
      return this.items.reduce(function(a,b){
        return a + b;
      })
    }else{
      return 0;
    }
  }
  average() {
    if(this.items.length > 0){
      //The average() method should return the average value of the array.
      return this.sum() / this.items.length;
    }else{
      throw new Error("EmptySortedList")
    }
  }

};

module.exports = SortedList;
