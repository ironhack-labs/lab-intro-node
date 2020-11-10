class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) =>a-b);
    this.length = this.items.length;

  }

  get(pos) {
    if(this.length > pos) {
     return this.items[pos];
     } else
      {

         throw new Error('OutOfBounds');
    }

  }

  max() {
    if(this.length){
        return this.items[this.length -1];
    } else {
      throw new Error("EmptySortedList");
    }


  }

  min() {
    if(this.length) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    
      if (this.length === 0) {
        return 0;
    
    } else {
      return  this.items.reduce((a,b) => a + b);
    }
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a,b) => a + b) / this.length;
    }

  }
}

module.exports = SortedList;
