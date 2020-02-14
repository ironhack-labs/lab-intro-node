class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(a,b){
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.length){
      throw new Error("OutOfBounds"); 
    } else {
      for (let i = 0; i < this.items.length; i++){
        if (pos === i){
          return this.items[i];
        }
      }
    }
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);

    }
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);

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
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      let total = 0;
      this.items.forEach(element => {
        total += element;
      });
      let avg = total / this.length;
      return avg;
    }
  }
}

module.exports = SortedList;
