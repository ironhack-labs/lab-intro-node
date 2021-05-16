class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  //Iteration 2: add(item)
  add(item) {
    this.items.push(item);
    this.items = this.items.sort((i1, i2) => i1 - i2);
    this.length++
  }

  //Iteration 3: get(pos)
  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  //Iteration 4: max()
  max() {
    if(this.items.length <= 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[this.items.length-1];
    }
  }

  //Iteration 5: min()
  min() {
    if(this.items.length <= 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0];
    }
  }

  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this.items.length <=0){
      return 0;
    }else{
      return this.items.reduce(reducer);
    }
  }

  avg() {
    if(this.items.length <= 0){
      throw new Error('EmptySortedList');
    }else{
      return this.sum()/this.items.length;
    }
  }
}

module.exports = SortedList;

/* const sortList = new SortedList([1,3,5]);

console.log(sortList.add(4)) */