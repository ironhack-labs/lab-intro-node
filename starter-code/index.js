class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item);
      this.items.sort(function(a, b){return a-b});
      this.length = this.items.length;  
  }

  get(pos) {
    if(pos > this.items.length - 1 || pos < 0){
      throw new Error("OutOfBounds");
    } else{
      return this.items[pos];
    }
  }

  max() {
    if(this.length >0){
      let maxArr = [...this.items];
      maxArr.sort(function(a,b){return b-a});
      return maxArr[0];
    } else{
      throw new Error("EmptySortedList");
    }
    
  }

  min() {
    if(this.length > 0){
      return this.items[0];
    } else{
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if(this.length > 0){
      return this.items.reduce((acc,cv)=>acc+cv);
    } else{
      return this.length;
    }
    
  }

  avg() {
    if(this.length > 0){
      return this.sum()/this.length;
    } else{
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
