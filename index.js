class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  // getItemsLength() {
  //   return this.items.length;
  // }

  get(pos) {
       if(pos<=this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutofBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let i = this.length-1;
      return this.items[i];
    }
  }

  min() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    let somme=this.items.reduce((acc,currentValue)=>acc+currentValue,0);
    return somme
  }
  
  avg() {
    
    let som=this.sum()
    let nb=this.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }else{
      return som/nb
    }
    
  }
}

module.exports = SortedList;
