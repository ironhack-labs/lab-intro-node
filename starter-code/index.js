class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    this.sum;
  }
  
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b) {return a-b
    }
    );
  }

  get(pos) {
    if (pos > this.length){
      throw new Error("OutOfBounds")
    }
    else{this.length=this.items.length;
    return this.items[pos-1];
    }
  }
  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }
    else{
      return this.items[this.length-1];
    }
  }



  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }
    else{
      return this.items[0];
    }
  }


  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList")}
      else{
    let avg = this.sum()/this.items.length;
    return avg;
  }
  }


  sum() {
    this.sum=0;
    if (this.length ===0) return 0;
    else {for (let i=0; i < this.length; i++){
      this.sum += this.items[i];
    }
      return this.sum;
    
    }
  }
};

module.exports = SortedList;
