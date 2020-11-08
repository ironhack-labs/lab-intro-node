class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort(function (a, b) {
      return b - a;
    })
  }

  get(pos) {
      if (pos<0 || pos> pos.length) {
        throw new Error('OutOfBounds');
      }
      else {
        return this.items[pos];
      }
    }

  max() {
    if(this.length ===0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items[this.length-1];
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
    let sum=0;
    for(i=0; i<this.length; i++){
      sum+=this.items[i];
    }
   }

  avg() {
    return sum/ this.items.length;
   }
}

module.exports = SortedList;

