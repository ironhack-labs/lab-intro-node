class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length 
    
  }

  add(item) {
   
    this.items.push(item)
    this.items=  this.items.sort(function(a, b){return a - b});


    this.length = this.items.length 
  }

  get(pos) {
    if ( pos < 0 || pos > this.length){
       throw new Error("OutOfBounds");
    }
    return this.items [pos]
  }

  max() {
    if (this.length <= 0){
      throw new Error("EmptySortedList");
    }
    let result = this.items[this.length -1]
    return result
  }

  min() {
    if (this.length <= 0){
      throw new Error("EmptySortedList");
    }
    let result = this.items[0]
    return result
  }

  sum() {
    if (this.length <= 0){
      return 0
    }
    let sumado = 0
    for (let i = 0; i < this.length; i++ ){
      let element = this.items[i]
      
      sumado += element
       
    }
    return sumado
  }

  avg() {
    if (this.length <= 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length
    
  }
}

module.exports = SortedList;

