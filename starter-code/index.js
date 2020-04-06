class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a,b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    // for (let i = 0; i < this.items.length; i++){
    //   if(i === pos){
    //     return this.items[i];
    //   } else{
    //     throw new Error("OutOfBounds");
    //   }
    // }

    if(pos <= this.items.length && pos >= 0){
      const result = this.items.filter (array => array === pos);
      return result;
    } else{
      throw new Error("OutOfBounds");
    }

  }

  max() {
    if(this.items.length <= 0){
      throw new Error("EmptySortedList");
    } else{
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length <= 0){
      throw new Error("EmptySortedList");
    } else{
      return Math.min(...this.items);
    }
  }

  sum() {
    // let counter = 0;

    // for (let i = 0; i < this.items.length; i++){
    //   counter += this.items[i];
    // }

    // return counter;

    if(this.items.length <= 0){
      return 0;
    }else{
      const reduced = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reduced);
    }
  }

  avg() {
    if(this.items.length <= 0){
      throw new Error("EmptySortedList");
    } else{
      let avg = this.sum() / this.items.length;
      return avg;
    }
  }
}

module.exports = SortedList;
