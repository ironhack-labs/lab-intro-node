class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort ((a,b) => a-b)
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if(this.items.length === 0) throw new Error("EmptySortedList")

    let highest = 0

    for(let i = 0;i<this.items.length;i++){
      if(this.items[i] > highest){
        highest = this.items[i]
      }
    }
    return highest
  }
  min() {
    if(this.items.length === 0) throw new Error("EmptySortedList")
    
    else{
    let lowest = this.items[0]

    for(let i = 1;i<this.items.length;i++){
      if(this.items[i] < lowest){
        lowest = this.items[i]
      }
    }
    return lowest
    }
  }
  average() {
    if(this.items.length === 0) throw new Error("EmptySortedList")
    else{  
    let sum = this.items.reduce((sum,item)=> sum + item)

    return sum / this.items.length
    }
  }
  sum() {
    if(this.items.length === 0) return 0
    
    let sum = this.items.reduce((sum,item)=> sum + item)
  
    return sum
  }
};

module.exports = SortedList;
