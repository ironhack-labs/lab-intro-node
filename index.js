class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let index = 0;
    for (index = 0; index < this.length; index++)
      if (this.items[index] >= item){
        break;
      }
    this.items.splice(index, 0, item)
    this.length++;
    }


  get(pos) {

    if (pos >= 0 && pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {

    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }else{
    return this.items[this.length - 1];
    }
  }

  min() {
   
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else{ (this.item > 0) 
      return this.items[0];
    }
  }

  sum() {

  if (this.items.length === 0){
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < this.length; i++) {
   sum += this.items[i];
  } 
  return sum;
}

  avg() {
    let average = this.sum() / this.length;

    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    else
      return average;
   }
  }

module.exports = SortedList;
