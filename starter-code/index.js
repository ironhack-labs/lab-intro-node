class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a,b) => a-b)
  }

  get(pos) {
    return this.intems[pos-1]
  }

  max() {
    if (this.items.length == 0){
    throw new Error("EmptySortedList")
   }
   else{
    return this.items[this.items.length -1]
   }
  }

  min() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList")
    } 
    else{
      return this.items[0]
    }
  }

  average() {
    if (this.items.length == 0){
      throw new Error('EmptySortedList')
    } 
  }

  sum() {
    if (this.items.length == 0){
      return 0
    }
  }
};

module.exports = SortedList;
