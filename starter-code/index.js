class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a,b)=> a-b)
  }

  get(pos) {
    this.length=this.items.length

    if(pos>this.length){
      throw new Error("OutOfBounds")
    }else{
      return this.items[pos]
    }

  }

  max() {
    this.length=this.items.length
    
    if(this.length===0){
      throw new Error("EmptySortedList")
    }else{
      return Math.max(...this.items)
    }
  }

  min() {
    this.length=this.items.length
    
    if(this.length===0){
      throw new Error("EmptySortedList")
    }else{
      return Math.min(...this.items)
    }
  
  }

  sum() {
    return this.length===0?0:this.items.reduce((acc,elm)=> acc+elm)

    // if(this.length===0){
    //   return 0
    // }else{
    //   return this.items.reduce((acc,elm)=> acc+elm)
    // }
  }

  avg() {
    this.length=this.items.length
    
    if(this.length===0){
      throw new Error("EmptySortedList")
    }else{
      return this.items.reduce((acc,elm)=> acc+elm)/this.length
    }
  }
}

module.exports = SortedList;
