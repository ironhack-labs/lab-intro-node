class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  };

  
  add(item) {
    /*for (let i = 0; i < item.length; i+=1){
      this.items.push(item[i]);
    };*/
    this.items.push(item);
    this.items.sort((a,b) => {
      if (a < b) return -1;
      if (a === 0) return 0;
      if (a > b) return 1;
    })
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.length - 1 || pos < 0){
      throw new error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (this.items.length === 0){
      return 0
    }
    
  }

  avg() {}
}

module.exports = SortedList;
