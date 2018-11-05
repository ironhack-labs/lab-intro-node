class SortedList {
  constructor() {
    this.array = [];
    this.length = this.array.length;
  }
  add(item) {
    this.length++;
    this.array.push(item);
    return this.array.sort((a,b)=>{return a - b;});
  }
  get(pos) {
    return this.array[pos-1];
  }
  max() {
    if (this.length === 0){
      throw new Error ("EmptySortedList");
      } 
      return this.array[this.array.length -1];
  }
  min() {
    if (this.length === 0){
      throw new Error ("EmptySortedList");
      } 
      return this.array[0];
  }
  average() {
    if (this.length === 0){
    throw new Error ("EmptySortedList");
    }
    return this.sum() / this.length;
  }
  sum() {
    return this.length === 0 ? 0 : this.array.reduce((acc, cr)=>acc += cr);
  }
};

module.exports = SortedList;
