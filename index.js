class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) { 
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    const valueSearch = this.items[pos];
    if (!valueSearch) {
      throw new Error ("OutOfBounds");
    }
    return valueSearch;    
  }
  max() { 
    const maxValue = Math.max(...this.items);
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return maxValue;

  }

  min() { 
    const minValue = Math.min(...this.items); 
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return minValue
  }

  sum() {

    let sumItems = 0
    for(let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      sumItems += item
    }
  return sumItems
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
        const averageItem = this.sum() / this.items.length;
        return averageItem;
   }
   
}

module.exports = SortedList;
