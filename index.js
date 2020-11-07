class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = [];
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    if(this.length > 1){
      this.items.sort((a,b)=> a-b);
      this.length ++;
    }
  }
  get(pos) {
    if (pos === null || pos > this.items.length){
    throw new Error('OutOfBounds');
  } else{
    return this.items[pos];
  }
}
  max() {
    if (this.length == 0){
    throw TypeError("EmptySortedList");
    } else{
    return Math.max.apply(null,this.items);
    }
  }

  min() {
    if (this.length == 0){
      throw TypeError("EmptySortedList");
      } else{
      return Math.min.apply(null,this.items);
      }
  }

  sum() {
    if (this.items.length < 1) {
      return 0;
    } else {
      return this.items.reduce((a, b) => {
        return a + b;
      });
    }
  }

  avg() {
    if (this.length == 0){
      throw TypeError("EmptySortedList");
      } else{
      return this.sum()/this.items.length;
      }
  }
}

module.exports = SortedList;
