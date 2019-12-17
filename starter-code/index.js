class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) { 
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort((a,b) => a - b)
  }

  get(pos) {

    if (this.items[pos] == undefined) {
      throw new Error("OutOfBounds");
    }else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }else {
      return Math.min.apply(null, this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }else {
      return this.items.reduce((acc,curr) => acc += curr)
    }
  }

  avg() {
    if (this.items.length === 0) {
       throw new Error("EmptySortedList");
    }else {
      let sum = 0;
      sum = this.items.reduce((acc,curr) => {
        return acc += curr
      })
      return sum / (this.items.length)
    }
  }
}


module.exports = SortedList;

// const newArr = new SortedList();

// newArr.add(1)
// newArr.add(1)
// newArr.add(4)

// console.log(newArr.add(3))