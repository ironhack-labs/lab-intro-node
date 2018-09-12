class SortedList {
  constructor() {
    this.list = []
    this.length = 0;
  }
  add(item) {
    this.list.push(item)
    this.list.sort((a,b) => a-b)
    this.length++
  }
  get(pos) {
    return this.list[pos-1]
  }
  max() {
     if (this.length === 0 ) { 
       throw new Error('EmptySortedList') 
      } else  {
        return this.list[this.length-1]
      } 
  }
  min() {
    if (this.length === 0 ) { 
      throw new Error('EmptySortedList') 
     } else  {
       return this.list[0]
     } 
  }
  average() {
    if (this.sum() === 0) {
        throw new Error("EmptySortedList");
    } else { return this.sum()/this.length}
  }
  sum() {
      return this.list.reduce((acc, item) => acc + item, 0);
  }
};

module.exports = SortedList;
