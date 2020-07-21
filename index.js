class SortedList {
  constructor() {
  this.items = [];
  this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a,b) => a-b
    )

  }

  get(pos) {
    if(pos <= this.length){
    var number = this.items[pos]
    console.log(number)
    return number
  }else{
    throw new Error('OutOfBounds');
  }
  }

  max() {
    if(this.length > 0){
      return Math.max(...this.items)
    }else{
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.length > 0){
      return Math.min(...this.items)
    }else{
      throw new Error("EmptySortedList");
    }
  } 


  sum() {

    if(this.length > 0){
    return this.items.reduce((a,b)=> a+b)
  }else return 0
  }

  avg() {
    var total = this.items.reduce((a,b)=> a+b)
    return total/this.length
  }
}

module.exports = SortedList;
