class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if(pos > this.length ){
      throw new Error ('OutOfBounds');
    }else return this.items[pos]
  }

  max() {
    let big = 0;
    if(this.items.length > 0){
      this.items.forEach((number)=>{
        if (number > big) big = number; 
      });
      return big;
    }else {
      throw new Error ('EmptySortedList');
    }
  }

  min() {
    let lower = Infinity ;
    if(this.items.length > 0){
      this.items . forEach((number) => {
        if(number < lower ) lower = number;
      })
      return lower  ;
    }else throw new Error('EmptySortedList')
  }

  sum() {
    let soma = this.items.reduce((acc, cur) => acc + cur, 0);
    if(this.items.length > 0){
      return soma;
    }else return 0;
  }

  avg() {
    if (this.items.length > 0){
      let total = this.items.reduce((acc, cur) => acc + cur, 0);
      let avg = total / this.length;
      return avg
    }else throw new Error('EmptySortedList')
  }
}

module.exports = SortedList;