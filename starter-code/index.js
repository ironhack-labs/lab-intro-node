class SortedList {
  constructor() {

    this.items = [];
    this.length = this.items.length;
    

  }

  add(item) {

    this.items.push(item);
    this.items.sort(function (a, b){
      return a - b;

    });
    this.length = this.items.length;

}
    

  get(pos){

    if(this.items[pos] != undefined){

     return this.items[pos]
    }else{

      throw new Error("OutOfBounds");
    }


  }

  max() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }else{
      
      return Math.max(...this.items);
      
    }

  }

  min() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }else{
      
      return Math.min(...this.items);
      
    }

  }


  sum() {

    if(this.items.length === 0){
      return 0;
    }else{
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return this.items.reduce(reducer);
    }
  }

  avg() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }else{
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let sum = this.items.reduce(reducer);
  
  return sum / this.items.length;

    }
  }
}

module.exports = SortedList;
