class SortedList {
  constructor() {
  this.items = []
  this.length = this.items.length;
  }
  add(item) {

      this.items.push(item);
      this.length = this.items.length;
        function compare (a,b){
          return a - b;
        }
        this.items.sort(compare);
  }

  get(pos) {

  
    if (pos > this.items.length){
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {

    let summ = 0 ;

    for (let i = 0; i < this.items.length; i++){
      summ += this.items[i]
    }
    return summ;
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
     return this.sum(this.items) / this.items.length;
    }
  }
}

module.exports = SortedList;
