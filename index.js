/* class that maintains a sorted list of numbers in ascending order */
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((num1, num2) => num1-num2);
    this.length = this.items.length;
  }

  get(pos) {

    if(pos>=this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.items.length ===0) throw new Error("EmptySortedList");
    let maxNum =0;
    this.items.forEach(num => {
      if (num > maxNum) maxNum = num;      
    });
    return maxNum;
  }

  min() {
    if (this.items.length ===0) throw new Error("Empty SortedList");
    return this.items[0] //array is sorted in ascending order already, OR classical approach as in previous iteration

  }

  sum() {
    if (this.items.length ===0) return 0;
    return this.items.reduce((acc,num)=> {
      return acc+num;
    }, 0);
  }

  avg() {
    if (this.items.length ===0) throw new Error("EmptySortedList");
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
