class SortedList {
  constructor() {
    this.items = []
    this.lenght = 0;
  }

  add(item) {
    let index = 0 ;
    while (index < this.lenght && item > this.item[index]){
      index ++
    }
    this.items.splice(index, 0, item);
    this.lenght++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
    throw new Error("EmptySortedList");
  }
  return this.items[0];
  }

  sum() {
     if (this.length > 0) {
      return this.items.reduce((accumaltor, currentValue) => accumaltor + currentValue, 0);
    } else {
      return 0;
  }

  avg() {}
}

module.exports = SortedList;
