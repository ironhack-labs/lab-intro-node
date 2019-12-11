class SortedList {
  constructor(items, length) {
    this.items =[];
    this.length = this.items.length;
  }

  add(item) {
    this.length++;
    this.items.push(item);
    function compare(a,b){return a - b;}
    this.items.sort(compare);
  }

  get(pos) {
    if (pos > this.items.length){throw new Error("OutOfBounds");
  }else {
    return this.items[pos];
  }

  }

  max() {
    if(this.length == 0) {
      throw new Error("EmptySortedList");
    }else{
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length == 0){
      throw new Error ("EmptySortedList");
    }else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if(this.length == 0){
      return 0;
    }else{
       return this.items.reduce((a,b) => a+b);
    }
  }

  avg() {
    if(this.length == 0){
      throw new Error ("EmptySortedList");
    }else{
      return this.items.reduce((a,b) => (a+b))/this.items.length;
    }
}

module.exports = SortedList;
