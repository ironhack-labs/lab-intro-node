class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> (a-b))
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }else{
      return Math.max(...this.items)
    }
    

  }
  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }else{
      return Math.min(...this.items)
    }
    
  }
  average() {
    if( this.length===0){
      throw new Error("EmptySortedList")
    }else{
      var total = 0
    for (var element of this.items){
      total += element
    }
    
    }

    return total / this.length
  }
  sum() {
    var total = 0
    for (var element of this.items){
      total += element
    }

    return total
  }
};

module.exports = SortedList;


