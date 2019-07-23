class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(x) {
    this.items.push(x)
    this.length++
    
  }

  get(pos) {

    if(this.items.length === 0){
      throw new Error("OutOfBounds")
    }else {
     
      return this.items[pos]

    }
    
  }

  max() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    }else {
      this.items.sort((a, b) => a - b)

      return this.items[this.length - 1]

    }
    
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    }else {
      this.items.sort((a, b) => b - a)

      return this.items[this.length - 1]

    }
  }
  average() {

    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    }else {
     
      return this.sum() / this.items.length
      

    }
  }


  sum() {

    if(this.items.length === 0){
      return 0
    }else {
      

      return this.items.reduce((a, b)=> a + b)
    }
     

  }
};

module.exports = SortedList;