class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    };
    let highestValue = 0; //in case of negative numbers, instead of 0 we could put the first number
    // let highestValue = this.items[0];
    this.items.forEach((currentNum) => {
      if (currentNum > highestValue){
        highestValue = currentNum;
      }
    }) //this is usefull in case the array is not ordered
    return highestValue;
    //because the array is already ordered, we could also return the last element in the array.
    //return this.items[this.length -1];
  }

  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    };
    return this.items[0]; //it works because the array is orderedotherwise we could have used a similar version of the last one
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    };
    let addedNums = 0;
    this.items.forEach((currentNum) => addedNums += currentNum)
    return addedNums;
    //.reduce method: return this.items.reduce((acc, currentNum) => acc + currentNum, 0);
  }

  avg() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    };
    const addedNums = this.items.reduce((acc, currentNum) => acc + currentNum, 0);
    return addedNums / this.items.length; // dont use only this.length as it mmight throw errors in case of not using add()
  }
}

module.exports = SortedList;
