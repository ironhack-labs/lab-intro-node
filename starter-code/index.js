class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error("OutOfBounds");
    }else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length -1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    let total = 0;
    this.items.forEach(element => {
      total += element;    
    });
    return total;
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    let avg = 0;
    let total = 0;
    this.items.forEach(element => {
      total += element;
    });
    avg = total / this.length;
    return avg;
  }
}

module.exports = SortedList;
