class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      if (a < b){
        return -1 ;
      } else {
        return 1;
      }
    });
    this.length = this.items.length;
  }

  get(pos) {
    const index = this.items.indexOf(pos);
    if (index < 0 ){
      throw new Error("OutOfBounds");
    } else {
      return index;
    }
  }

  max() {
    if (this.length === 0 ){
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0 ){
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    let totalSum = 0;
    this.items.forEach( item => {
       totalSum = totalSum + item;
    })
    return totalSum;
  }

  avg() {
    let avg = 0;
    if(this.length > 0 ) {
      avg = this.sum() / this.length;
      return avg;
    } else {
      throw new Error("EmptySortedList");
    }
    
  }
}

module.exports = SortedList;
