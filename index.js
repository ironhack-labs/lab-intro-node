class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    let  myList = this.items
    myList.push(item);
    myList.forEach((element) => {
      this.length ++;
    })
    return myList.sort((a, b) => a - b);
    }


  get(pos) {
    let myList = this.items;
    if (pos < 0 || pos > myList.length) {
      throw new Error("OutOfBounds");
    }
    return myList[pos];
    
  }
    
  

  max() { 
    let max = Math.max(...this.items);
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return max;
  }

  min() {
    let min = Math.min(...this.items);
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return min;
  }

  sum() {
    let summatory = 0;
    this.items.forEach((element) => {
      summatory += element
    })
    if(this.items.length === 0) {
      return 0;
    }
    return summatory;
  }

  avg() {
    let myList = this.items;
    let sum = 0;
    for(let i = 0; i  < myList.length; i++) {
      sum += myList[i];
    }
    if(myList.length === 0) {
      throw new Error("EmptySortedList");
    }
    return sum / myList.length;
  }
}


module.exports = SortedList;
