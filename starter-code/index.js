class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a,b) {
        return a-b;
    })
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos]=== undefined){
      throw new Error("OutOfBounds");
    } else {return this.items[pos];}
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    let higherNumber = 0;
    this.items.map(element => {
      if (element > higherNumber){
        higherNumber = element;
      } 
    });
    return higherNumber;
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    let higherNumber = this.items[0];
    this.items.map(element => {
      if (element < higherNumber){
        higherNumber = element;
      } 
    });
    return higherNumber;

  }

  sum() {
    let sum = 0;
    if(this.length === 0){
      return sum;
    }

    this.items.forEach(element => {
      sum += element;
    });
   return sum;
  }

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
