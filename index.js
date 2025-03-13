class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
    
  }

  get(pos) {

    if(this.items[pos]>0){
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[0]
    }
  }
  

  sum() {
    if(this.items.length === 0){
      return 0;
    } else {
      const totalSum = this.items.reduce((acc, elem) => {
        return acc + elem
      },0)

      return totalSum
    }
  
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {

      const totalSum = this.items.reduce((acc, elem) => {
        return acc + elem
      },0)

      return totalSum/this.items.length

    }
  }

  
}

module.exports = SortedList;
