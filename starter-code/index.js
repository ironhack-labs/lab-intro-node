class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){
      return a-b
    })
    this.length += 1
  }

  get(pos) {

    if(this.items[pos] === undefined){
      throw new Error ("OutOfBounds");
    }
    else{
      return this.items[pos]
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return Math.max(...this.items)
    }

  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return Math.min(...this.items)
    }

  }

  sum() {

  }

  avg() {

  }
}

module.exports = SortedList;
