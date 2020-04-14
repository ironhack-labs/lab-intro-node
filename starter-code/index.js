class SortedList {
  constructor(items) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length
  }

  get(pos) {


    if(pos > this.items.length){
      throw new Error("OutOfBounds");
    }else{
      return this.items.slice(pos, pos+1) 
      //return this.items[pos] ----> another way
    }

  }

  max() {
    if(this.items.length != 0){
      //return Math.max(...this.items) ---> another way
      return this.items.sort((a,b) => a-b)[this.items.length -1] 
    }else{
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if(this.length != 0){
      //return Math.min(...this.items) ---> another way
      return this.items.sort((a,b) => a-b)[0]
    }else{
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if(this.length != 0){
      return this.items.reduce((acc, elm) => acc + elm)
    }else{
     return 0
    }
    
  }

  avg() {
    if(this.length != 0){
      return this.sum() / this.length
    }else{
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
