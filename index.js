class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b)
    this.length = this.items.length

  }

  get(pos) {
    if (pos === null || pos > this.items.length){
      throw new Error('OutOfBounds');
    } else{
      return this.items[pos];
    }
  }
  max() {
    {
      if(this.length ===0){
        throw new Error('EmptySortedList');
      }
      else{
        return this.items[this.length-1];
      }
     }
    }

  min() {

    if(this.length ===0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items[0];
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
