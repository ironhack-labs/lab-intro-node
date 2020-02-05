class SortedList {
  constructor(items) {
    this.items = [];
    this.length = 0;
    // this.length = this.items.length;
  }


  add(item) {

      this.items.push(item);
      this.items.sort(function(a, b){
        return a - b;
    });
    this.length +=1;
  }


  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");    
    }
    else {
      return this.items[pos];
    }
  }


  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      let maxNum = Math.max(...this.items);
      return maxNum;
    }
  }


  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      let minNum = Math.min(...this.items);
      return minNum;
    }
  }
  

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    else {
      // let array = this.items;
      let sumArr = this.items.reduce( (acc, curr) => acc + curr );
      return sumArr;
    }
  }

  avg() {
    if (this.items.length === 0) {
      return EmptySortedList;
    }
    else {
      // let array = this.items;
      let sumArr = this.items.reduce( (acc, curr) => acc + curr );
      return sumArr / this.items.length;
    }
  }
  }


module.exports = SortedList;
