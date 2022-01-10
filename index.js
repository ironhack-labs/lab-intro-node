class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){
      return a-b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    let highestNum = this.items[0];
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    }
    for (let i = 1; i < this.items.length; i++){
      if (this.items[i] > highestNum){
        highestNum = this.items[i];
      }
    }
    return highestNum;
  }

  min() {
    let lowestNum = this.items[0];
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    }
    for (let i = 1; i < this.items.length; i++){
      if (this.items[i] < lowestNum){
        lowestNum = this.items[i];
      }
    }
    return lowestNum;
  }

  sum() {
    if (this.items.length == 0){
      return 0;
    } else {
      return this.items.reduce(function (a, b) {
        return a + b;
      })
    }
  }

  avg() {
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
