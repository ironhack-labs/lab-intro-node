class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
       if(this.items[pos] === undefined) {
         throw new Error("OutOfBounds")
        }else {
         return this.items[pos]
       } 
      }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      const max = Math.max(...this.items);
      return max;
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
    return this.items[0]
  }
}
  sum() {
    let total = 0; 
      this.items.forEach((element) => {
        total += element
      });
  return total
    }
  

  avg() {
    let total = 0;
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach((element) => {
        total += element;
      })
    }
  return total / this.items.length
  }
}

module.exports = SortedList;
