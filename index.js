class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b)=> {
      return a-b;
    });
    this.length++;
  };

  get(pos) {
    if(pos < 0 || pos >= this.items.length){
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    };
  };

  max() {
    let max = Math.max(...this.items);
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return max;
  }

  min() {
    let min = Math.min(...this.items);
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return min;
  }

  sum() {
    let sum=0;
    this.items.forEach((element)=>{
      sum += element;
    })

    if(this.length === 0){
      return 0;
    }
    return sum;
  }

  avg() {}
}

module.exports = SortedList;
