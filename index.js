class SortedList {
  constructor(items , length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a,b){
      return a - b;
    });
    this.length ++;
  }

  get(pos) {
    if (this.length < pos){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max(){
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.min.apply(null, this.items);
    }
  }

  sum() {
    let total;
    if (this.length === 0){
      return 0 ;
    } else {
      return this.items.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0)
  }
}
  avg() {
    if (this.length === 0){
      throw Error ('EmptySortedList');
    } else{
      return this.sum() / this.length;
  }
}
}

module.exports = SortedList;
