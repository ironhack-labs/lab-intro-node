class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // if(typeof(item) !== 'number'){
    //   item.forEach(element => {      
    //     this.items.push(item);
    //     this.items.sort();
    //   });
    // }
    this.items.push(item);
    this.items.sort(
      function(a,b) {
        return a-b;
      }
    ); this.length++;
  }

  get(pos) {
    if(pos > this.items.length){
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a,b)=>{return a+b}, 0);
  }

  avg() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items.reduce((a,b)=>{return a+b}, 0)/this.length;
  }
}

module.exports = SortedList;
