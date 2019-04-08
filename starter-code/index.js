class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    try {
      return this.items[pos - 1];
    }
    catch(error) {
      throw new Error("OutOfBounds");
    }    
  }

  max() {
    if(this.items.length > 0) return this.items[this.items.length - 1]
    else throw new Error("EmptySortedList")
  }
  
  min() {
    if(this.items.length > 0) return  this.items[0]
    else throw new Error("EmptySortedList")
  }

  average() {
    if(this.items.length > 0) return  (this.sum()/this.items.length)
    else throw new Error("EmptySortedList")
  }


  sum() {
    if(this.items.length > 0) return this.items.reduce(((acc,a)=>acc + a),0)
    else return 0
  }
};

module.exports = SortedList;
