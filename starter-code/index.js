class SortedList {
  constructor() {
    this.items    = [],
    this.length   = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) =>  a - b)
      this.length = this.items.length
  }

  get(pos) {
    // let outsider = this.items.filter(eachItem => {
    //   return this.items.indexOf(eachItem) >= this.length
    // })

    // if(outsider){
    //   throw new Error("OutOfBounds")
    // } 
    // return outsider

    if(pos>this.items.length){
      throw new Error("OutOfBounds")
    }
    return this.items.indexOf(pos)
  }


  max() {
    if(this.length===0){throw new Error("EmptySortedList");}  
    return this.items[Number(this.items.length) - 1]
 
  }

  min() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    } else{
      return this.items[0]
    }
  }

  sum() {
    let sum = 0
    for (let i=0; i < this.items;i++){
        sum += this.items[i]
        // console.log("CONSOLEEEEEEEEEEEE",this.items[i], sum )
    }
    if(this.items.length>0){
      return sum
    } else {
      return 0
    }
  }

  avg() {
    let count = 0
    for (let i=0; i < this.items;i++){
        count += this.items[i]
    }
    if(this.items.length>0){
      return count/Number(this.items.length)
    } else {
      return 0
    }
  }
}

module.exports = SortedList;
