class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    try {
      return this.items[pos];
    } catch (error) {
      return `Error: ${error} `;
    }
  }

  max(items) {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items)
  }

  min(items) {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items)
  }

  average(items) {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.sum()/this.length
  }

  sum(items) {
    if(this.length === 0){
      return 0;
    }
    return this.items.reduce((sum,value) => sum + value)
    
  }
  };
  
  module.exports = SortedList;