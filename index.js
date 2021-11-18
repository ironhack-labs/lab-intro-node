class SortedList {
  constructor(items,length) {
    (this.items = [],(this.length = 0))
  }

  add(item) {
    this.length ++;
    this.items.push (item)
    this.items.sort(function(a,b){
      return a-b
    })
  }

  get(pos) {
    if(pos>this.length){
      throw new Error ("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0){
      throw  new Error ("EmptySortedList")
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0){
      throw  new Error ("EmptySortedList")
    }
    return Math.min(...this.items)
  }

  sum() {
    if (this.length === 0){
    return 0
    } let sum= this.items.reduce(function(acc,value){
      return acc + value
    },0);
    return sum
  }

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }return this.sum()/this.length
  }
}

module.exports = SortedList;
