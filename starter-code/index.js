class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length!==0){
      for (let i=0;i<this.length;i++){
        if (item>this.items[i]) {
          if (i<this.length-1){
          continue;
          }else {
            this.items.push(item);
          }
        }
        else {
          this.items.splice(i,0,item);
          break;  
        }    
      }
    }
    else{
      this.items.push(item);
    }
    this.length++;
  }
  get(pos) {
    if (pos >= this.length || pos < 0){
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length > 0){
      return this.items[this.length-1]
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0){
      return this.items[0]
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0){
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
    } else {
      return 0
    }
  }

  avg() {
    if (this.length > 0){
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
