class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=> {
      if(a<b) return -1;
      else if(a>b) return 1;
      else return 0;
    });
  }

  get(pos) {
    if(pos >= 0 && pos < this.length){
      return this.items[pos];
    }
    else{
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.length) return this.items[this.length-1];
    else throw new Error('EmptySortedList');
  }

  min() {
    if(this.length) return this.items[0];
    else throw new Error('EmptySortedList');
  }

  sum() {
    return this.items.reduce((acc, elem) => {
      return acc+elem;
    }, 0);
  }

  avg() {
    if(this.length) return this.sum()/this.length;
    else throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
