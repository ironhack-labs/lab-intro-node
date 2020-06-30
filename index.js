class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let index = 0;
    for(index; index < this.length; index++){
      if(this.items[index] >= item){
        break;
      }
    }
    this.items.splice(index, 0, item);
    this.length++;
  }

  get(pos) {
    if(pos >= this.length) throw new Error("OutOfBounds");
    else return this.items[pos];
  }

  max() {
    if(this.length === 0) throw new Error("EmptySortedList");
    else {
      return this.items.reduce( (highestNb, currentNb) => {
        if(currentNb > highestNb) return currentNb;
        else return highestNb;
      }, Number.NEGATIVE_INFINITY)
    }
  }

  min() {
    if(this.length === 0) throw new Error("EmptySortedList");
    else {
      return this.items.reduce( (lowestNb, currentNb) => {
        if(currentNb < lowestNb) return currentNb;
        else return lowestNb;
      }, Number.POSITIVE_INFINITY)
    }
  }

  sum() {
    return this.items.reduce( (sum, currentNb) => sum += currentNb , 0);
  }

  avg() {
    if(this.length === 0) throw new Error("EmptySortedList");
    else{
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
